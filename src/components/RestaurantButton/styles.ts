import styled from 'styled-components';

import { Props } from '.';
import colors from '../../styles/variables';
import { Link } from 'react-router-dom';

export const Button = styled(Link)<Omit<Props, 'title' | 'children'>>`
  color: ${colors.lightSalmon};
  background-color: ${colors.salmon};
  padding: 6px 4px;
  font-weight: 700;
  line-height: 14px;
  cursor: pointer;
  font-size: ${(props) => (props.typeOf === 'tag' ? '12px' : '14px')};
  border: none;
  align-self: baseline;
`;
