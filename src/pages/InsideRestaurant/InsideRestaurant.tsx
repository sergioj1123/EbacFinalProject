import Banner from '../../components/Banner';
import HeaderInsidePage from '../../components/HeaderInsidePage';
import FoodList from '../../components/FoodList';
import { useParams } from 'react-router-dom';
import { useGetFoodQuery } from '../../services/api';

const InsideRestaurant = () => {
  const { id } = useParams<{ id: string }>();
  const { data: restaurant } = useGetFoodQuery(id!);

  if (!restaurant) return <div>Carregando...</div>;

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
    </div>
  );
};

export default InsideRestaurant;
