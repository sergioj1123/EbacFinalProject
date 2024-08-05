import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as Cart from '../Cart/styles';
import * as S from './styles';
import InputMask from 'react-input-mask';
import { Button } from '../Food/styles';
import { useSelector, useDispatch } from 'react-redux';
import { RootReducer } from '../../store';
import {
  clear,
  closeOrder,
  closePayment,
  closeSucess,
  openCart,
  openOrder,
  openPayment,
  openSucess,
} from '../../store/reducers/cart';
import { getTotalCart, priceConvert } from '../../utils';
import { usePurchaseMutation } from '../../services/api';
import { useEffect } from 'react';

export const CheckOut = () => {
  const dispatch = useDispatch();
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation();
  const { orderIsOpen, items, paymentIsOpen, sucessIsOpen } = useSelector(
    (state: RootReducer) => state.cart,
  );

  const form = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCVV: '',
      cardMonthExperian: '',
      cardYearExperian: '',
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'O nome deve ter pelo menos 5 caracteres')
        .required('Campo obrigatório'),
      address: Yup.string()
        .min(5, 'O nome deve ter pelo menos 5 caracteres')
        .required('Campo obrigatório'),
      city: Yup.string()
        .min(5, 'O nome deve ter pelo menos 5 caracteres')
        .required('Campo obrigatório'),
      cep: Yup.string()
        .min(8, 'O nome deve ter pelo menos 5 caracteres')
        .required('Campo obrigatório'),
      number: Yup.string().required('Campo obrigatório'),
      complement: Yup.string(),
      cardName: Yup.string()
        .min(5, 'O nome deve ter pelo menos 5 caracteres')
        .required('Campo obrigatório'),
      cardNumber: Yup.string()
        .min(16, 'O número do cartão deve conter 16 digítos')
        .required('Campo obrigatório'),
      cardCVV: Yup.string()
        .min(3, 'O CVV deve conter 3 digítos')
        .required('Campo obrigatório'),
      cardMonthExperian: Yup.string()
        .min(2, 'O mês deve conter 2 digítos')
        .required('Campo obrigatório'),
      cardYearExperian: Yup.string()
        .min(4, 'O ano deve conter 4 digítos')
        .required('Campo obrigatório'),
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: parseInt(values.number),
            complement: values.complement,
          },
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: parseInt(values.cardCVV),
            expires: {
              month: parseInt(values.cardMonthExperian),
              year: parseInt(values.cardYearExperian),
            },
          },
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.valor,
        })),
      });
    },
  });

  const checkInputHasError = (field: string) => {
    const alredyChanged = field in form.touched;
    const hasError = field in form.errors;
    return alredyChanged && hasError;
  };

  const openCartPopUp = () => {
    dispatch(closeOrder());
    dispatch(openCart());
  };

  const OpenPaymentPopUp = () => {
    dispatch(closeOrder());
    dispatch(openPayment());
  };

  const returnToAddress = () => {
    dispatch(closePayment());
    dispatch(openOrder());
  };

  const sucessButton = () => {
    dispatch(closeSucess());
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear());
      dispatch(closeOrder());
      dispatch(closePayment());
      dispatch(openSucess());
    }
  }, [isSuccess, dispatch]);

  return (
    <>
      <Cart.CartContainer className={orderIsOpen ? 'is-open' : ''}>
        <Cart.Overlay
          title="Clique aqui para retornar ao carrinho"
          onClick={openCartPopUp}
        />
        <Cart.Sidebar>
          <S.Title>Entrega</S.Title>
          <form onSubmit={form.handleSubmit}>
            <S.InputGroup>
              <label htmlFor="receiver">Quem irá receber</label>
              <input
                id="receiver"
                name="receiver"
                type="text"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.receiver}
                className={checkInputHasError('receiver') ? 'error' : ''}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="address">Endereço</label>
              <input
                id="address"
                name="address"
                type="text"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.address}
                className={checkInputHasError('address') ? 'error' : ''}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="city">Cidade</label>
              <input
                id="city"
                name="city"
                type="text"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.city}
                className={checkInputHasError('city') ? 'error' : ''}
              />
            </S.InputGroup>
            <S.Row>
              <S.InputGroup maxwidth="155px" display="inline-block">
                <label htmlFor="cep">CEP</label>
                <InputMask
                  id="cep"
                  name="cep"
                  type="text"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.cep}
                  mask={'99999-999'}
                  className={checkInputHasError('cep') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup maxwidth="155px" display="inline-block">
                <label htmlFor="number">Número</label>
                <input
                  id="number"
                  name="number"
                  type="number"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.number}
                  className={checkInputHasError('number') ? 'error' : ''}
                />
              </S.InputGroup>
            </S.Row>
            <S.InputGroup>
              <label htmlFor="complement">Complemento (opcional)</label>
              <input
                id="complement"
                name="complement"
                type="text"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.complement}
                className={checkInputHasError('complement') ? 'error' : ''}
              />
            </S.InputGroup>
            <div className="buttonGroup">
              <Button
                type="button"
                onClick={OpenPaymentPopUp}
                title="Clique aqui para seguir com as informações de pagamento"
              >
                Continuar com o pagamento
              </Button>
              <Button
                type="button"
                onClick={openCartPopUp}
                title="Clique aqui para retornar ao carrinho"
              >
                Voltar para o carrinho
              </Button>
            </div>
          </form>
        </Cart.Sidebar>
      </Cart.CartContainer>

      <Cart.CartContainer className={paymentIsOpen ? 'is-open' : ''}>
        <Cart.Overlay
          title="Clique aqui para retornar ao carrinho"
          onClick={returnToAddress}
        />
        <Cart.Sidebar>
          <S.Title>
            Pagamento - Valor a pagar {priceConvert(getTotalCart(items))}
          </S.Title>
          <form onSubmit={form.handleSubmit}>
            <S.InputGroup>
              <label htmlFor="cardName">Nome no cartão</label>
              <input
                id="cardName"
                name="cardName"
                type="text"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.cardName}
                className={checkInputHasError('cardName') ? 'error' : ''}
              />
            </S.InputGroup>
            <S.Row>
              <S.InputGroup maxwidth="228px" display="inline-block">
                <label htmlFor="cardNumber">Número do cartão</label>
                <InputMask
                  id="cardNumber"
                  name="cardNumber"
                  type="text"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.cardNumber}
                  mask={'9999 9999 9999 9999'}
                  className={checkInputHasError('cardNumber') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup maxwidth="87px" display="inline-block">
                <label htmlFor="cardCVV">CVV</label>
                <InputMask
                  id="cardCVV"
                  name="cardCVV"
                  type="text"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.cardCVV}
                  mask={'999'}
                  className={checkInputHasError('cardCVV') ? 'error' : ''}
                />
              </S.InputGroup>
            </S.Row>
            <S.Row>
              <S.InputGroup maxwidth="155px" display="inline-block">
                <label htmlFor="cardMonthExperian">Mês</label>
                <InputMask
                  id="cardMonthExperian"
                  name="cardMonthExperian"
                  type="text"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.cardMonthExperian}
                  mask={'99'}
                  className={
                    checkInputHasError('cardMonthExperian') ? 'error' : ''
                  }
                />
              </S.InputGroup>
              <S.InputGroup maxwidth="155px" display="inline-block">
                <label htmlFor="cardYearExperian">Ano</label>
                <InputMask
                  id="cardYearExperian"
                  name="cardYearExperian"
                  type="text"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.cardYearExperian}
                  mask={'9999'}
                  className={
                    checkInputHasError('cardYearExperian') ? 'error' : ''
                  }
                />
              </S.InputGroup>
            </S.Row>
            <div className="buttonGroup">
              <Button
                type="submit"
                title="Clique aqui para finalizar o pagamento"
                onClick={() => form.handleSubmit()}
                disabled={isLoading}
              >
                Finalizar pagamento
              </Button>
              <Button
                type="button"
                onClick={returnToAddress}
                title="Clique aqui para retornar a página do endereço"
              >
                Voltar para a ediçao de endereço
              </Button>
            </div>
          </form>
        </Cart.Sidebar>
      </Cart.CartContainer>
      <Cart.CartContainer
        className={isSuccess && data && sucessIsOpen ? 'is-open' : ''}
      >
        <Cart.Overlay
          title="Clique aqui para retornar ao carrinho"
          onClick={openCartPopUp}
        />
        <Cart.Sidebar>
          <S.Title>Pedido realizado - {data?.orderId}</S.Title>
          <S.text>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </S.text>
          <S.text>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </S.text>
          <S.text>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </S.text>
          <S.text>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </S.text>
          <Button
            type="button"
            onClick={sucessButton}
            title="Clique aqui para retornar a página do restaurante"
          >
            {isLoading ? 'Processando' : 'Concluir'}
          </Button>
        </Cart.Sidebar>
      </Cart.CartContainer>
    </>
  );
};

export default CheckOut;
