import {Link} from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import pho from '../images/32947034_abstract_pastel_gradient_blur_background_design_0509.jpg';

const sizes = {
  mobile: '600px',
  tablet: '900px',
  desktop: '1200px',
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = `(max-width: ${sizes[label]})`;
  return acc;
}, {});


export const Button = styled.button`
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

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh; // Now it's 100% of the viewport height
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const CardContent = styled.div`
  width: 80vw;
  position: relative;
  max-width: 100%;
  height: 80vh;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.4); // Make background semi-transparent
  backdrop-filter: blur(15px); // Apply blur
`;

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0px 20px 10px;
  color: white;
  border-radius: 10px 10px 0px 0px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(25px);
`;

export const Logo = styled.div`
  font-size: 2em;
  cursor: pointer;
  transition: color 0.3s ease;
   margin-left: 150px; 
  &:hover {
    color: #5215FC;
  }
`;

export const Navigation = styled.nav`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  li {
    display: inline;
    padding: 15px;
  }
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  transition: color 0.3s ease;
  padding: 10px 20px;
  border-radius: 20px; // Adjust as necessary to create the oval shape
  background-color: ${props => true ? '#DD83E0' : 'transparent'};

  &:hover {
    color: #5215FC;
  }
`;

export const waveAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

export const Wrapper = styled.div`
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