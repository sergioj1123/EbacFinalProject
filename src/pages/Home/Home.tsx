import RestaurantList from '../../components/RestaurantList';
import Header from '../../components/header';
import { useGetRestaurantsQuery } from '../../services/api';

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
  const { data: restaurants } = useGetRestaurantsQuery();
  console.log(restaurants);

  if (restaurants) {
    return (
      <div className="mainBackGround">
        <Header />
        <div className="container">
          <RestaurantList restaurants={restaurants} />
        </div>
      </div>
    );
  }
  return <h3>Carregando...</h3>;
};

export default Home;
