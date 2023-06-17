import styled, { css } from 'styled-components';
import { moveUp, moveDown } from '../Footer/ShowEffect';

export const StyleFooterDataModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalBox = styled.div`
  ${props =>
    props.isOpenModal
      ? css`
          animation: ${moveDown} 0.3s;
        `
      : css`
          animation: ${moveUp} 0.3s;
        `}

  position: absolute;
  bottom: 0;
  width: 100%;
  height: 300px;
  border: none;
  border-radius: 30px 30px 0px 0px;
  background-color: white;
`;
