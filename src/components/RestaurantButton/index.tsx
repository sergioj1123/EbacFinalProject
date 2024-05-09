import { Button } from './styles';

export type Props = {
  children: string;
  typeOf: 'tag' | 'submit';
  title?: string;
  to?: string;
};

const RestaurantButton = ({ title, children, typeOf, to }: Props) => (
  <>
    <Button title={title} typeOf={typeOf} to={to as string}>
      {children}
    </Button>
  </>
);

export default RestaurantButton;
