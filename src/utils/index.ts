import { Food } from '../components/FoodList';

export const priceConvert = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
};

export const getTotalCart = (items: Food[]) => {
  return items.reduce((acc, item) => acc + item.valor, 0);
};
