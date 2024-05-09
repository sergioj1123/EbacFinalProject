import { createGlobalStyle } from 'styled-components';
import colors from './variables';

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
    color: ${colors.salmon};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

  .mainBackGround{
  background-color: ${colors.backGround};
  }
`;
