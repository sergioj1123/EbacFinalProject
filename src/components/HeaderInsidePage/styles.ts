import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderList = styled.ul`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  font-size: 18px;
  font-weight: 900;
  align-items: center;
  justify-content: space-between;
  p {
    cursor: pointer;
  }
`;

export const ReturnButton = styled(Link)`
  max-width: 238px;
  width: 100%;
  cursor: pointer;
`;
