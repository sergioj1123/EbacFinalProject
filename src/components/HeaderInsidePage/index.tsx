import { HeaderContainer, Logo } from '../header/styles';
import logo from '../../assets/images/logo.svg';
import { HeaderList, ReturnButton } from './styles';

const HeaderInsidePage = () => (
  <HeaderContainer>
    <HeaderList>
      <li>
        <ReturnButton to="/">Restaurantes</ReturnButton>
      </li>
      <li>
        <Logo src={logo} alt="Logo do Efood" />
      </li>
      <li>
        <p>0 produto(s) no carrinho</p>
      </li>
    </HeaderList>
  </HeaderContainer>
);

export default HeaderInsidePage;
