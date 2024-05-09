import styled from 'styled-components';
import colors from '../../styles/variables';
import backGroundImg from '../../assets/images/headerBackGround.svg';

export const HeaderContainer = styled.header`
  background-image: url(${backGroundImg});
  color: ${colors.salmon};

  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  margin-top: 64px;
  max-width: 125px;
`;

export const Slogan = styled.h2`
  max-width: 539px;
  padding: 138px 0 40px 0;
  text-align: center;
  font-weight: 900;
  font-size: 36px;
  line-height: 42.19px;
  color: ${colors.salmon};
`;
