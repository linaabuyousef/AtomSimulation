import React, { useEffect, useRef, useState } from 'react';
import { Engine } from './engine/Engine';
import { Demo } from './demo/Demo';
import { useLocation } from 'react-router-dom';
import { Electron } from '../types/Electron';
import { useSelector } from 'react-redux';
import { Checkbox } from 'semantic-ui-react';

const Simulation: React.FC = () => {

  const [electron, setElectron] = useState<Electron | null>(null);
  const start = useSelector((state: any) => state.electronState.electronsFetch);
  const canvasRef = useRef(null);
  const location = useLocation();
  const [engine, setEngine] = useState<Engine | null>(null);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (location.state) {
      setElectron((location.state as any).electron);
    }
  }, [location]);

  useEffect(() => {
    // Check if electron data has been fetched and canvasRef is not null
    if (start && canvasRef.current) {
      setEngine(
        new Engine({
          canvas: canvasRef.current,
          experience: Demo,
        })
      );
    }
  }, [start]);

  useEffect(() => {
    const currentCanvasRef = canvasRef.current;

    if (currentCanvasRef) {
      const resizeObserver = new ResizeObserver(() => {
        // Wrap the engine.resize() call inside requestAnimationFrame()
        requestAnimationFrame(() => {
          if (engine) {
            engine.resize();
          }
        });
      });

      resizeObserver.observe(currentCanvasRef);

      return () => {
        resizeObserver.unobserve(currentCanvasRef);
      };
    }
  }, [engine]);

  const pauseAnimation = () => {
    if (engine?.experience) {
      (engine.experience as Demo).pauseAnimation();
    }
    setPause(true);
  };

  const resumeAnimation = () => {
    if (engine?.experience) {
      (engine.experience as Demo).resumeAnimation();
    }
    setPause(false);
  };

  return (
    <div style={{ width: '100%', height: '90%', overflow: 'hidden', alignItems: 'center', backgroundColor: 'white' }}>
      <label>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '10px' }}>Resume</span>
          <Checkbox slider checked={pause} onChange={pause ? resumeAnimation : pauseAnimation} />
          <span style={{ marginLeft: '10px' }}>Pause</span>
        </div>
      </label>
      <div style={{ width: '100%' }}>
        <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  );
};

export default Simulation;
