import styled, { css } from 'styled-components';
import { fadeInUp } from '../Modal/FilterShowEffect';

export const StyleFilterModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 110;
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

  /* @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: flex-end;
    display: none; 
  }
  */
  ${props =>
    props.isOpenModal &&
    css`
      animation: ${fadeInUp} 0.5s ease;
    `}
`;
