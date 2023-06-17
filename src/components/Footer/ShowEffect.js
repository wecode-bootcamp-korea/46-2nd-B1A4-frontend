import { keyframes } from 'styled-components';

export const moveUp = keyframes`
from {
    opacity: 1;
    margin-bottom: 0;

  }
  to {
    opacity: 0;
    margin-bottom: -50px;
  }
`;

export const moveDown = keyframes`
from {
    opacity: 0;
    margin-top: -50px;
  }
  to {
    opacity: 1;
    margin-bottom: 0;
  }
`;
