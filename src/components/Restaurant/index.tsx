import {
  About,
  ButtonGroup,
  Container,
  Information,
  Pontuation,
  RestaurantImg,
  TitleDiv,
} from './styles';

import { Button } from '../RestaurantButton/styles';
import star from '../../assets/images/star.svg';
import RestaurantButton from '../RestaurantButton';

type Props = {
  name: string;
  image: string;
  type: string;
  stars: number;
  about: string;
};

const Restaurant = ({ name, image, type, stars, about }: Props) => (
  <Container>
    <RestaurantImg src={image} alt="Imagem do Restaurante" />
    <ButtonGroup>
      <Button to={'/'} typeOf="tag">
        {type}
      </Button>
    </ButtonGroup>
    <Information>
      <TitleDiv>
        <h2>{name}</h2>
        <Pontuation>
          <span>{stars}</span>
          <img src={star} alt="Star" />
        </Pontuation>
      </TitleDiv>
      <About>{about}</About>
      <RestaurantButton typeOf="submit" title="Saiba Mais" to="/restaurant">
        Saiba Mais
      </RestaurantButton>
    </Information>
  </Container>
);

export default Restaurant;
