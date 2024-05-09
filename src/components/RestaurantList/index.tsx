import { default as RestaurantModel } from '../../models/Restaurant';
import Restaurant from '../Restaurant';
import { List } from './styles';

type Props = {
  restaurants: RestaurantModel[];
};

const RestaurantList = ({ restaurants }: Props) => (
  <List>
    {restaurants.map((restaurant) => (
      <Restaurant
        about={restaurant.about}
        image={restaurant.image}
        name={restaurant.name}
        stars={restaurant.stars}
        type={restaurant.type}
        key={restaurant.id}
      />
    ))}
  </List>
);

export default RestaurantList;
