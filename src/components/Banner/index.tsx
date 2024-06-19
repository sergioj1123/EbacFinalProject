import { Container, Opacity, Tags, TagsList, Title } from './styles';

export type Props = {
  title: string;
  type: string;
  background: string;
};

const Banner = ({ title, type, background }: Props) => (
  <Container background={background}>
    <Opacity />
    <div className="container">
      <TagsList>
        <Tags>{type}</Tags>
      </TagsList>
      <Title>{title}</Title>
    </div>
  </Container>
);

export default Banner;
