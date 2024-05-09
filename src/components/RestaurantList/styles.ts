import styled from 'styled-components';
import colors from '../../styles/variables';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 24px;
  padding-top: 80px;
  padding-bottom: 120px;
  background-color: ${colors.lightSalmon};
`;
