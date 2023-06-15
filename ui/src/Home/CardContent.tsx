import Header from './Header';
import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, 
         Container,
         CardWrapper, 
         CardContent } from '../assests/styles/StyledComponents';


interface InnerCardProps {
  children: ReactNode;
}

export const StartSimulationButton = () => {

  const navigate = useNavigate();
  const handleButton = () => {
    navigate('/form');
  };
  
  return (
    <Container>
      <Button onClick={handleButton}>Start Simulation</Button>
    </Container>
  );
};

export const InnerCard: React.FC<InnerCardProps> = ({ children }) => {

  return (
    <CardWrapper>
      <CardContent>
        <Header />
        {children}
      </CardContent>
    </CardWrapper>
  );
};

export default InnerCard;
