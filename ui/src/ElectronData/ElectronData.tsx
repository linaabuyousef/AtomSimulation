import React, { useEffect, useState } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';

const ElectronData = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [calculations, setCalculations] = useState<{ x: number; y: number; z: number }[][]>([]);
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
  const electronData = useSelector((state: any) => state.electronState.electron);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>, titleProps: any) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const newCalculations = electronData?.map((electron: { data: any; orbits: { map: (arg0: (orbits: any) => { x: any; y: any; z: any; }) => any; z: any; }; }) => {

      const electronCalculations = electron?.orbits?.map((orbits: { x: any; y: any; z: any; }) => {
        const x = orbits.x;
        const y = orbits.y;
        const z = orbits.z ? electron.orbits.z : 0;
        return { x, y, z };
      });
      return electronCalculations;
    }) || [];

    setCalculations(newCalculations);
  }, [electronData]);

  return (
    <div
      style={{
        width: isDesktopOrLaptop ? '35%' : '70%',
        height: '73vh',
        overflow: 'auto',
        backgroundColor: 'white',
      }}
    >
      {calculations.map((electronCalculations, index) => (
        <Accordion styled key={index}>
          <Accordion.Title active={activeIndex === index} index={index} onClick={handleClick}>
            <Icon name='dropdown' />
            {`Electron Index: ${index}`}
          </Accordion.Title>
          <Accordion.Content active={activeIndex === index}>
            {electronCalculations &&
              electronCalculations.map((calculation, i) => (
                <p key={i}>
                  X: {calculation.x}, Y: {calculation.y}, Z: {calculation.z}
                </p>
              ))}
          </Accordion.Content>
        </Accordion>
      ))}
    </div>
  );
};

export default ElectronData;
