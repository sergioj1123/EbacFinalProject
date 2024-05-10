import styled from 'styled-components';
import { Props } from '.';
import colors from '../../styles/variables';

export const Container = styled.div<Omit<Props, 'title' | 'type'>>`
  background-image: url(${(props) => props.background});
  background-size: cover;
  position: relative;
`;

export const Opacity = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const TagsList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const Tags = styled.li`
  font-size: 32px;
  font-weight: 100;
  padding: 25px 0 156px 0;
  color: ${colors.white};
`;

export const Title = styled.h2`
  position: relative;
  bottom: 0px;
  left: 0px;
  font-size: 32px;
  font-weight: 900;
  padding-bottom: 32px;
  color: ${colors.white};
`;
