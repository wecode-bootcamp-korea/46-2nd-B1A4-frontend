import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Background = styled.div`
  ${props => props.theme.flexBox('row', 'center', 'center')};
  z-index: 5;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalWrapper = styled.div`
  ${props => props.theme.flexBox('row', 'center', 'center')};
  position: relative;
  z-index: 10;
  margin: 0 40px;
  padding: 40px;
  width: 100%;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  border-radius: 10px;
`;

export const ModalContent = styled.div`
  ${props => props.theme.flexBox('column', 'center', 'center')};
  margin: 0 10px;
  width: 100%;
  line-height: 1.8;
  color: #141414;

  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

export const CloseModalButton = styled(FontAwesomeIcon)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 22px;
  height: 22px;
  padding: 0;
  z-index: 10;
`;
