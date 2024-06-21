import styled from 'styled-components';
import colors from '../../styles/variables';
import { Button } from '../Food/styles';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  padding-top: 56px;
  padding-bottom: 120px;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;

  &.show {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    cursor: pointer;
  }
`;

export const ModalContent = styled.div`
  background-color: ${colors.salmon};
  z-index: 1;
  max-width: 1024px;
  padding: 32px;
  position: relative;
  display: flex;
  gap: 24px;
  max-height: 300px;
  height: 100%;

  .CloseWindows {
    position: absolute;
    width: 16px;
    height: 16px;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }

  .imgContainer {
    max-width: 280px;
    max-height: 280px;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const FoodInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h1 {
    color: ${colors.white};
    font-size: 18px;
    font-weight: 900;
    line-height: 21px;
  }

  p,
  span {
    color: ${colors.white};
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }

  span {
    margin-top: 16px;
  }

  ${Button} {
    max-width: fit-content;
  }
`;
