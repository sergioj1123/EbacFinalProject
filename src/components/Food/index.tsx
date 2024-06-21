import { Button, Container, Description, Image, Title } from './styles';

type Props = {
  title: string;
  description: string;
  image: string;
  onClick?: () => void;
};

const Food = ({ title, description, image, onClick }: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 260) {
      return description.slice(0, 258) + '...';
    }
    return description;
  };

  return (
    <Container>
      <Image src={image} alt="Imagem do prato" />
      <Title>{title}</Title>
      <Description>{getDescription(description)}</Description>
      <Button onClick={onClick}>Mais detalhes</Button>
    </Container>
  );
};

export default Food;
