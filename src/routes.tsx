import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import InsideRestaurant from './pages/InsideRestaurant/InsideRestaurant';

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant" element={<InsideRestaurant />} />
  </Routes>
);

export default Router;
