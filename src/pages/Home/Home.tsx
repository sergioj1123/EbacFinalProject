import RestaurantList from '../../components/RestaurantList';
import Header from '../../components/header';
import { useEffect, useState } from 'react';

export type Restaurant = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: {
    foto: string;
    preco: number;
    id: number;
    nome: string;
    descricao: string;
    porcao: string;
  }[];
};

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res));
  }, []);

  return (
    <div className="mainBackGround">
      <Header />
      <div className="container">
        <RestaurantList restaurants={restaurants} />
      </div>
    </div>
  );
};

export default Home;
