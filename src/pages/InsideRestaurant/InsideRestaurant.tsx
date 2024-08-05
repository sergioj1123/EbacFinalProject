import Banner from '../../components/Banner';
import HeaderInsidePage from '../../components/HeaderInsidePage';
import FoodList from '../../components/FoodList';
import { useParams } from 'react-router-dom';
import { useGetFoodQuery } from '../../services/api';
import Cart from '../../components/Cart';
import Address from '../../components/CheckOut';
import Loader from '../../components/Loader';

const InsideRestaurant = () => {
  const { id } = useParams<{ id: string }>();
  const { data: restaurant } = useGetFoodQuery(id!);

  if (!restaurant) return <Loader />;

  return (
    <div className="mainBackGround">
      <HeaderInsidePage />
      <Banner
        title={restaurant.titulo}
        type={restaurant.tipo}
        background={restaurant.capa}
      />
      <div className="container">
        <FoodList cardapio={restaurant.cardapio} />
      </div>
      <Cart></Cart>
      <Address />
    </div>
  );
};

export default InsideRestaurant;
