import React, { ReactNode } from 'react';
import { Wrapper } from '../assests/styles/StyledComponents';
import InnerCard from './CardContent';

const Waveform = () => {
  return (
    <div className="body" style={{ height: '100%', width: '100%', zIndex: 1, position: 'absolute' }}>
      <div className="container" style={{ top: 0, left: 0, width: '100%', height: '100%', transform: 'rotate(-180deg)' }}>
        <svg viewBox="0 0 500 900" preserveAspectRatio="xMinYMin meet">
          <defs>
            <linearGradient id="myGradient" gradientTransform="rotate(90)">
              <stop offset="0%" stop-color="#8233C5" />
              <stop offset="100%" stop-color="#E963FD" /> 
            </linearGradient>
          </defs>
          <path d="M0, 40 C500, 0 550, 420 500, 200 L550, 00 L0, 0 Z" style={{ stroke: "none", fill: "url(#myGradient)" }}></path>
          <path d="M0, 50 C100, 100 350, 0 500, 40 L500, 00 L0, 0 Z" style={{ stroke: "none", fill: "url(#myGradient)" }}></path>
        </svg>
      </div>
    </div>
  );
}

interface InnerCardProps {
  children: ReactNode;
}

const Home: React.FC<InnerCardProps> = ({ children }) => {
  return (
    <Wrapper>
      <InnerCard>{children}</InnerCard>
    </Wrapper>
  );
}

export default Home;
