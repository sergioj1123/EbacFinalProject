import styled from 'styled-components';
import colors from '../../styles/variables';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  background-color: ${colors.salmon};
`;

export const Image = styled.img`
  max-width: 300px;
  max-width: 100%;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 900;
  color: ${colors.lightSalmon};
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.lightSalmon};
`;

export const Button = styled.button`
  padding: 4px;
  background-color: ${colors.lightSalmon};
  color: ${colors.salmon};
  font-size: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
`;
