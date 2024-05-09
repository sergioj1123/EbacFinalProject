import { HeaderContainer, Logo, Slogan } from './styles';
import logo from '../../assets/images/logo.svg';

const Header = () => (
  <HeaderContainer>
    <div className="container">
      <Logo src={logo} alt="Logo do Efood" />
      <Slogan>Viva experiências gastronômicasno conforto da sua casa</Slogan>
    </div>
  </HeaderContainer>
);

export default Header;
