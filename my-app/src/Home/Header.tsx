import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useToggle } from 'react-use';

const HeaderWrapper = styled.header`
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

const Logo = styled.div`
  font-size: 2em;
  cursor: pointer;
  transition: color 0.3s ease;
   margin-left: 150px; 
  &:hover {
    color: #5215FC;
  }
`;

const Navigation = styled.nav`
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

const StyledLink = styled(Link)`
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

const Header = () => {
  const location = useLocation();

  return (
    <HeaderWrapper>
      <Logo onClick={() => window.location.href = '/'}>Bohr Atom</Logo>
      <Navigation>
        <ul>
          <li><StyledLink to="/">Home</StyledLink></li>
          <li><StyledLink to="/about" >About</StyledLink></li>
          <li><StyledLink to="/contact" >Contact</StyledLink></li>
        </ul>
      </Navigation>
    </HeaderWrapper>
  );
};

export default Header;
