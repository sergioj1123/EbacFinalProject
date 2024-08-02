import { CartContainer, CartItem, Overlay, Price, Sidebar } from './styles';
import trash from '../../assets/images/trashItem.svg';
import { Button } from '../Food/styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../store';
import { closeCart, remove } from '../../store/reducers/cart';
import { priceConvert } from '../../utils';

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);

  const dispatch = useDispatch();

  const closeCartPopUp = () => {
    dispatch(closeCart());
  };

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  const sumTotal = items.reduce((acc, item) => acc + item.valor, 0);

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay
        title="Clique aqui para fechar o carrinho"
        onClick={closeCartPopUp}
      ></Overlay>
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img className="foodImage" src={item.imageUrl} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <span>{priceConvert(item.valor)}</span>
              </div>
              <img
                className="trashItem"
                src={trash}
                alt="Imagem da Lixeira"
                onClick={() => removeItem(item.id)}
              />
            </CartItem>
          ))}
        </ul>
        <Price>
          <span>Total</span>
          <h3>{priceConvert(sumTotal)}</h3>
        </Price>
        <Button
          onClick={(event) => {
            event.preventDefault;
          }}
        >
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  );
};

export default Cart;
