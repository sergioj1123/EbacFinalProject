import { Button } from './styles';

export type Props = {
  children: string;
  typeOf: 'tag' | 'submit';
  title?: string;
};

const RestaurantButton = ({ title, children, typeOf }: Props) => (
  <>
    <Button title={title} typeOf={typeOf}>
      {children}
    </Button>
  </>
);

export default RestaurantButton;
