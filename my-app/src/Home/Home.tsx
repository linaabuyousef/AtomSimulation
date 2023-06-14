import styled, { keyframes } from 'styled-components';
import InnerCard from './CardContent';
import { ReactNode } from 'react';
import pho from './32947034_abstract_pastel_gradient_blur_background_design_0509.jpg';

const waveAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const sizes: { [index: string]: string } = {
  mobile: '600px',
  tablet: '900px',
  desktop: '1200px',
};

// Iterate through the sizes and create a media template
const media: { [index: string]: string } = Object.keys(sizes).reduce((acc: { [index: string]: string }, label: string) => {
  acc[label] = `(max-width: ${sizes[label]})`;
  return acc;
}, {});

const Wrapper = styled.div`
  // background-color: #00eeeeee;
  background-image: url(${pho});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; // Full height of the viewport
  flex-direction: row; // Add this line

  @media ${media.mobile} {
    flex-direction: column;
    height: auto; // Automatic height for mobile
  }
`;


const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2vh; // Adjust to be relative to viewport height
  border-radius: 1vh; // Adjust this too

  @media ${media.mobile} {
    flex-direction: column;
    padding: 5vw; // Adjust to be relative to viewport width on mobile
  }
`;

const AtomImage = styled.img`
  width: 10vw; // Adjust this
  height: 10vh; // And this
`;


const Waveform = () => {
    return (
        <div className="body" style={{ height: '100%', width: '100%', zIndex: 1,  position: 'absolute' }}>
        <div className="container" style={{top: 0, left: 0, width: '100%', height: '100%', transform: 'rotate(-180deg)'}}>
          <svg viewBox="0 0 500 900" preserveAspectRatio="xMinYMin meet">
          <defs>
    <linearGradient id="myGradient" gradientTransform="rotate(90)">
      <stop offset="0%"  stop-color="#8233C5" />
      <stop offset="100%" stop-color="#E963FD" /> {/* Change to your desired color */}
    </linearGradient>
  </defs>
            {/* <path d="M0, 50 C200, 130 350, 0 500, 40 L500, 00 L0, 0 Z" style={{stroke: "none", fill:"rgba(20, 144, 225, 0.5)"}}></path> */}
            <path d="M0, 40 C500, 0 550, 420 500, 200 L550, 00 L0, 0 Z" style={{stroke: "none", fill: "url(#myGradient)" }}></path> 
            <path d="M0, 50 C100, 100 350, 0 500, 40 L500, 00 L0, 0 Z" style={{stroke: "none", fill:"url(#myGradient)"}}></path> 
          </svg>
        </div>
      </div>
      );
  }
  

const WaveformWrapper = styled.div`
  position: absolute;
  zIndex: 2;
`;

interface InnerCardProps {
  children: ReactNode;
}


const Home: React.FC<InnerCardProps> = ({ children }) => {
 
  return (
    <Wrapper>
        <InnerCard children={children}/>
    </Wrapper>
  );
}

export default Home;
