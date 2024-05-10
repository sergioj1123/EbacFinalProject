import { Button, Container, Description, Image, Title } from './styles';

type Props = {
  title: string;
  description: string;
  image: string;
  onClick?: () => void;
};

const Food = ({ title, description, image, onClick }: Props) => (
  <Container>
    <Image src={image} alt="Imagem do prato" />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Button onClick={onClick}>Adicionar ao carrinho</Button>
  </Container>
);

export default Food;
