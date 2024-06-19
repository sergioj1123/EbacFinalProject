import Food from '../Food';
import { List } from './styles';

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

const FoodList = ({ cardapio }: Props) => (
  <List>
    {cardapio.map((food) => (
      <Food
        title={food.nome}
        description={food.descricao}
        image={food.foto}
        key={food.id}
      />
    ))}
  </List>
);

export default FoodList;
