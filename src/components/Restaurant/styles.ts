import styled from 'styled-components';
import colors from '../../styles/variables';

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${colors.salmon};
  max-width: 472px;
`;

export const RestaurantImg = styled.img`
  width: 100%;
  max-height: 217px;
`;

export const ButtonGroup = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
export const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 8px;
  color: ${colors.salmon};
`;

export const TitleDiv = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: 700;
  justify-content: space-between;
`;

export const Pontuation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  img {
    max-width: 21px;
  }
`;

export const About = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`;
