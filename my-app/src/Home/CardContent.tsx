import styled from 'styled-components';
import AtomForm from '../FieldsPage/Form';
import Header from './Header';
import React, { ReactNode, useState } from 'react';
import {sizes, media} from './ResponsiveStyle';
import { useNavigate } from 'react-router-dom';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1vh 2vw;
  background-color: #DD83E0;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #C872C2;
  }
  margin: auto; // Add this if it's still not centered
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh; // Now it's 100% of the viewport height
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const CardContent = styled.div`
  width: 80vw;
  position: relative;
  max-width: 100%;
  height: 80vh;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  background-color: rgba(255, 255, 255, 0.4); // Make background semi-transparent
  backdrop-filter: blur(15px); // Apply blur
`;


const ChildrenContainer = styled.div`
  height: 100%;
  width: 100%;
`;

interface InnerCardProps {
  children: ReactNode;
}

export const StartSimulationButton = () => {

  const navigate = useNavigate();
  const handleButton = () => {
      navigate('/form');
  }

  return(
    <Container>
         <Button onClick={handleButton}>Start Simulation</Button>
    </Container>
  )
}

export const InnerCard: React.FC<InnerCardProps> = ({ children }) => {
  
    const [formPage, setFormPage] = useState(false);

    const handleButton = () => {
        setFormPage(true);
    }
    
    return (
      <CardWrapper>
          <CardContent>
              <Header/>
              {children}
          </CardContent>
      </CardWrapper>
    );
}


export default InnerCard;  