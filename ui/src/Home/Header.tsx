import { HeaderWrapper, 
         Logo,
         Navigation, 
         StyledLink} from '../assests/styles/StyledComponents';

const Header = () => {

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
