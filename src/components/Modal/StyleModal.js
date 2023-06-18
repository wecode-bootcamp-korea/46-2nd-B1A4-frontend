import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Background = styled.div`
  position: fixed;
  ${props => props.theme.flexBox('row', 'center', 'center')};
  width: 100%;
  height: 100%;
  padding: 20px;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

export const ModalWrapper = styled.div`
  position: relative;
  ${props => props.theme.flexBox('column', 'flex-start', 'center')};
  width: 36vw;
  min-width: 230px;
  color: #000;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
`;

export const ModalHeader = styled.div`
  position: sticky;
  position: -webkit-sticky;
  ${props => props.theme.flexBox('row', 'center', 'center')};
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #dddddd;
`;

export const Header = styled.div`
  font-size: 1rem;
  font-weight: 700;
`;

export const CloseModalButton = styled(FontAwesomeIcon)`
  position: absolute;
  top: 19px;
  left: 20px;
  width: 20px;
  height: 20px;
  padding: 0;
  z-index: 15;
  cursor: pointer;
`;

export const ModalContent = styled.div`
  width: 100%;
  max-height: 70vh;
  overflow-y: auto;
`;
