import { Restaurant as RestaurantType } from '../../pages/Home/Home';
import Restaurant from '../Restaurant';

import { List } from './styles';

type Props = {
  restaurants: RestaurantType[];
};

const RestaurantList = ({ restaurants }: Props) => (
  <List>
    {restaurants.map((restaurant) => (
      <Restaurant
        about={restaurant.descricao}
        image={restaurant.capa}
        name={restaurant.titulo}
        stars={restaurant.avaliacao}
        type={restaurant.tipo}
        key={restaurant.id}
      />
    ))}
  </List>
);

export default RestaurantList;
