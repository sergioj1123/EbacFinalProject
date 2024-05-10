import RestaurantList from '../../components/RestaurantList';
import Header from '../../components/header';
import restaurantImage from '../../assets/images/restaurantOne.png';
import restaurantTwoImage from '../../assets/images/restaurantTwo.png';
import Restaurant from '../../models/Restaurant';

export const restaurants: Restaurant[] = [
  {
    about:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: restaurantImage,
    name: 'Sushi House',
    stars: '4.9',
    type: ['Detaque da Semana', 'Japonesa'],
    id: 1,
  },
  {
    about:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: restaurantTwoImage,
    name: 'Sushi House',
    stars: '4.9',
    type: ['Italiana'],
    id: 2,
  },
  {
    about:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: restaurantTwoImage,
    name: 'Sushi House',
    stars: '4.9',
    type: ['Italiana'],
    id: 3,
  },
  {
    about:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: restaurantTwoImage,
    name: 'Sushi House',
    stars: '4.9',
    type: ['Italiana'],
    id: 4,
  },
  {
    about:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: restaurantTwoImage,
    name: 'Sushi House',
    stars: '4.9',
    type: ['Italiana'],
    id: 5,
  },
  {
    about:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: restaurantTwoImage,
    name: 'Sushi House',
    stars: '4.9',
    type: ['Italiana'],
    id: 6,
  },
];

const Home = () => (
  <div className="mainBackGround">
    <Header />
    <div className="container">
      <RestaurantList restaurants={restaurants} />
    </div>
  </div>
);

export default Home;
