import styled from 'styled-components';
import colors from '../../styles/variables';
import { Button } from '../Food/styles';

export const CartContainer = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }

  .buttonGroup {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-top: 16px;
  }
`;

export const Overlay = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const Sidebar = styled.aside`
  z-index: 1;
  background-color: ${colors.salmon};
  padding: 32px 8px;
  max-width: 360px;
  width: 100%;

  ${Button} {
    width: 100%;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  span {
    display: flex;
    justify-content: center;
    color: ${colors.lightSalmon};
    font-size: 16px;
    font-weight: 700;
    text-align: center;
  }
`;

export const CartItem = styled.li`
  position: relative;
  display: flex;
  padding: 8px;
  background-color: ${colors.lightSalmon};

  .foodImage {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
    margin-bottom: 4px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: ${colors.salmon};
    h3 {
      font-size: 18px;
      font-weight: 900;
    }
    span {
      font-size: 16px;
      font-weight: 400;
    }
  }
  .trashItem {
    position: absolute;
    width: 16px;
    height: 16px;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`;

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  padding-bottom: 16px;
  span,
  h3 {
    color: ${colors.lightSalmon};
    font-size: 14px;
    font-weight: 700px;
  }
`;
