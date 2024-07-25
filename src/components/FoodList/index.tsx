import { useState } from 'react';
import Food from '../Food';
import { FoodInformation, List, Modal, ModalContent } from './styles';
import { Button } from '../Food/styles';
import close from '../../assets/images/close.svg';
import { useDispatch } from 'react-redux';
import { add, openCart } from '../../store/reducers/cart';

type Props = {
  cardapio: {
    id: number;
    foto: string;
    preco: number;
    nome: string;
    descricao: string;
    porcao: string;
  }[];
};

export type Food = {
  show?: boolean;
  name: string;
  description: string;
  quantity: string;
  imageUrl: string;
  valor: number;
  id: number;
};

export const priceConvert = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
};

const FoodList = ({ cardapio }: Props) => {
  const [modal, setModal] = useState<Food>({
    show: false,
    name: '',
    description: '',
    quantity: '',
    imageUrl: '',
    valor: 0,
    id: 0,
  });

  const closeWindow = () => {
    setModal({
      show: false,
      name: '',
      description: '',
      quantity: '',
      imageUrl: '',
      valor: 0,
      id: 0,
    });
  };

  const dispatch = useDispatch();

  const addFoodToCart = () => {
    dispatch(add(modal));
    dispatch(openCart());
  };

  return (
    <>
      <List>
        {cardapio.map((food) => (
          <Food
            title={food.nome}
            description={food.descricao}
            image={food.foto}
            key={food.id}
            onClick={() => {
              setModal({
                show: true,
                name: food.nome,
                description: food.descricao,
                quantity: food.porcao,
                imageUrl: food.foto,
                valor: food.preco,
                id: food.id,
              });
            }}
          />
        ))}
      </List>
      <Modal className={modal.show ? 'show' : ''}>
        <ModalContent>
          <img
            className="CloseWindows"
            src={close}
            alt="Clique aqui para fechar a tela"
            onClick={closeWindow}
          />
          <div className="imgContainer">
            <img src={modal.imageUrl} alt="Imagem do prato" />
          </div>
          <FoodInformation>
            <h1>{modal.name}</h1>
            <p>{modal.description}</p>
            <span>Serve: de {modal.quantity}</span>
            <Button onClick={addFoodToCart}>
              Adicionar ao carrinho - {priceConvert(modal.valor)}
            </Button>
          </FoodInformation>
        </ModalContent>
        <div className="overlay" onClick={closeWindow}></div>
      </Modal>
    </>
  );
};

export default FoodList;
