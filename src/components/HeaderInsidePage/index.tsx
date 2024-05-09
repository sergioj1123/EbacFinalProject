import { HeaderContainer, Logo } from '../header/styles';
import logo from '../../assets/images/logo.svg';

const HeaderInsidePage = () => (
  <HeaderContainer>
    <div className="container">
      <Logo src={logo} alt="Logo do Efood" />
    </div>
  </HeaderContainer>
);

export default HeaderInsidePage;
