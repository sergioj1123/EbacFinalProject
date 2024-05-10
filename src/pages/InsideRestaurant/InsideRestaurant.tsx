import Banner from '../../components/Banner';
import HeaderInsidePage from '../../components/HeaderInsidePage';
import backgroundURL from '../../assets/images/banner.png';
import { restaurants } from '../Home/Home';

const InsideRestaurant = () => (
  <div className="mainBackGround">
    <HeaderInsidePage />
    <Banner
      title={restaurants[0].name}
      type={restaurants[0].type}
      background={backgroundURL}
    />
    <div className="container"></div>
  </div>
);

export default InsideRestaurant;
