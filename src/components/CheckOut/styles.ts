import styled from 'styled-components';
import colors from '../../styles/variables';

type Props = {
  maxwidth?: string;
  display?: string;
};

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.lightSalmon};
  padding-bottom: 16px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputGroup = styled.div<Props>`
  display: ${(props) => props.display || 'flex'};
  flex-direction: column;
  max-width: ${(props) => props.maxwidth || '100%'};

  label,
  input {
    font-size: 14px;
    font-weight: 700;
    color: ${colors.lightSalmon};
  }
  input {
    color: ${colors.grey};
    padding: 8px;
    border: none;
    margin: 8px 0;
    max-width: ${(props) => props.maxwidth || '100%'};

    &.error {
      border: 3px solid ${colors.red};
    }
  }
`;

export const text = styled.p`
  font-size: 14px;
  color: ${colors.lightSalmon};
  padding-bottom: 24px;
`;
