import styled from 'styled-components';
import colors from '../../styles/variables';

export const FooterContainer = styled.footer`
  background-color: ${colors.lightSalmon};
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LinksList = styled.ul`
  padding: 32px 0 80px;
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const LinkItem = styled.li`
  max-width: 24px;
  cursor: pointer;

  img {
    width: 100%;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 11px;
`;
