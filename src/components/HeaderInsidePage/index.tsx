import { HeaderContainer, Logo } from '../header/styles';
import logo from '../../assets/images/logo.svg';
import { HeaderList, ReturnButton } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../store';
import { openCart } from '../../store/reducers/cart';

const HeaderInsidePage = () => {
  const { items } = useSelector((state: RootReducer) => state.cart);

  const dispatch = useDispatch();

  const openCartPage = () => {
    dispatch(openCart());
  };
  return (
    <HeaderContainer>
      <HeaderList>
        <li>
          <ReturnButton to="/">Restaurantes</ReturnButton>
        </li>
        <li>
          <Logo src={logo} alt="Logo do Efood" />
        </li>
        <li>
          <p onClick={openCartPage}>{items.length} produto(s) no carrinho</p>
        </li>
      </HeaderList>
    </HeaderContainer>
  );
};

export default HeaderInsidePage;
