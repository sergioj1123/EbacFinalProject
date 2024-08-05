import { ClipLoader } from 'react-spinners';
import colors from '../../styles/variables';
import { Container } from './styles';

export const Loader = () => {
  return (
    <Container>
      <ClipLoader color={colors.salmon} />
    </Container>
  );
};

export default Loader;
