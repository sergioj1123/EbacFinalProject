import { Food as FoodModel } from '../../models/Food';
import Food from '../Food';
import { List } from './styles';

type Props = {
  foods: FoodModel[];
};

const FoodList = ({ foods }: Props) => (
  <List>
    {foods.map((food) => (
      <Food
        title={food.title}
        description={food.description}
        image={food.image}
        key={food.id}
      />
    ))}
  </List>
);

export default FoodList;
