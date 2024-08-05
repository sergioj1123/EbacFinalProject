import { CartContainer, CartItem, Overlay, Price, Sidebar } from './styles';
import trash from '../../assets/images/trashItem.svg';
import { Button } from '../Food/styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../store';
import { closeCart, openOrder, remove } from '../../store/reducers/cart';
import { getTotalCart, priceConvert } from '../../utils';

const Cart = () => {
  const { cartIsOpen, items } = useSelector((state: RootReducer) => state.cart);

  const dispatch = useDispatch();

  const closeCartPopUp = () => {
    dispatch(closeCart());
  };

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  const openAdress = () => {
    dispatch(closeCart());
    dispatch(openOrder());
  };

  const total = getTotalCart(items);

  return (
    <CartContainer className={cartIsOpen ? 'is-open' : ''}>
      <Overlay
        title="Clique aqui para fechar o carrinho"
        onClick={closeCartPopUp}
      ></Overlay>
      <Sidebar>
        {total === 0 ? (
          <span>Seu carrinho está vazio</span>
        ) : (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img
                    className="foodImage"
                    src={item.imageUrl}
                    alt={item.name}
                  />
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
              <h3>{priceConvert(getTotalCart(items))}</h3>
            </Price>
            <Button onClick={openAdress}>Continuar com a entrega</Button>
          </>
        )}
      </Sidebar>
    </CartContainer>
  );
};

export default Cart;
