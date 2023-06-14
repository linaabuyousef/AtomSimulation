import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import { Engine } from './Simulation/engine/Engine';
import { Demo } from './Simulation/demo/Demo';
import Simulation from './Simulation/Simulation';
import AtomForm from './FieldsPage/Form';
import {StartSimulationButton} from './Home/CardContent';
import AccordionExampleStyled from './ElectronData/ElectronData';
const Main = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    new Engine({
      canvas,
      experience: Demo,
    });

    console.log('k');
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home children={<StartSimulationButton/>} />} />
        <Route path="/form" element={<Home children={<AtomForm/>} />} />
        <Route path="/simulation" element={
                                            <Home children={
                                              <div style={{ flexDirection: 'row', display: 'flex' }}>
                                              <AccordionExampleStyled />
                                              <div style={{flex: 'none'}}>
                                                <Simulation/>
                                              </div>
                                            </div>
                                            
                                            } />} 
                                          />

        {/* <Route path="/simulation" element={<Home children={<AccordionExampleStyled />} />} /> */}
      </Routes>
    </Router>
  );
};

export default Main;
