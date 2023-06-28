import styled, { css } from 'styled-components';
import { fadeInUp } from './ReviewShowEffect';

export const StyleOrderRevModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 800px;
  height: 90%;
  border-radius: 15px;
  border: none;
  background-color: white;
  overflow: hidden;

  ${props =>
    props.isOpenModal &&
    css`
      animation: ${fadeInUp} 0.5s ease;
    `}
`;
