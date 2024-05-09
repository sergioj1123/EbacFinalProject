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
import restaurantImage from '../../assets/images/restaurantOne.png';
import star from '../../assets/images/star.svg';
import RestaurantButton from '../RestaurantButton';

const Restaurant = () => (
  <Container>
    <RestaurantImg src={restaurantImage} alt="Imagem do Restaurante" />
    <ButtonGroup>
      <Button typeOf="tag">Destaque da Semana</Button>
      <Button typeOf="tag">Japonesa</Button>
    </ButtonGroup>
    <Information>
      <TitleDiv>
        <h2>Hioki Sushi</h2>
        <Pontuation>
          <span>4.9</span>
          <img src={star} alt="Star" />
        </Pontuation>
      </TitleDiv>
      <About>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão
        sem sair do lar com nosso delivery!
      </About>
      <RestaurantButton typeOf="submit" title="Saiba Mais">
        Saiba Mais
      </RestaurantButton>
    </Information>
  </Container>
);

export default Restaurant;
