import Banner from '../../components/Banner';
import HeaderInsidePage from '../../components/HeaderInsidePage';
import backgroundURL from '../../assets/images/banner.png';
import foodURL from '../../assets/images/food.png';
import FoodList from '../../components/FoodList';
import { Food } from '../../models/Food';

export const foodList: Food[] = [
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: foodURL,
    id: 1,
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: foodURL,
    id: 2,
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: foodURL,
    id: 3,
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: foodURL,
    id: 4,
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: foodURL,
    id: 5,
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: foodURL,
    id: 6,
  },
];

const InsideRestaurant = () => (
  <div className="mainBackGround">
    <HeaderInsidePage />
    <Banner
      title={'Bella Tavola Italiana'}
      type={'Italiana'}
      background={backgroundURL}
    />
    <div className="container">
      <FoodList foods={foodList} />
    </div>
  </div>
);

export default InsideRestaurant;
