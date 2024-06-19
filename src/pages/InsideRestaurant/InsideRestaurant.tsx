import Banner from '../../components/Banner';
import HeaderInsidePage from '../../components/HeaderInsidePage';
import FoodList from '../../components/FoodList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Restaurant } from '../Home/Home';

const InsideRestaurant = () => {
  const { id } = useParams<{ id: string }>();
  const [restaurant, setRestaurant] = useState<Restaurant>();

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes/' + id)
      .then((res) => res.json())
      .then((res) => setRestaurant(res));
  }, [id]);

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
