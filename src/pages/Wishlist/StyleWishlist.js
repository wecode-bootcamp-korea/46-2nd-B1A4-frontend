import styled from 'styled-components';
import { BsHouseExclamation } from 'react-icons/bs';

export const Container = styled.div`
  padding: 80px;
  max-width: 1400px;
  min-height: 100vh;
  margin: 0 auto;
`;

export const Wrap = styled.div`
  display: grid;
  column-gap: 15px;
  grid-template-columns: repeat(4, 1fr);
  transition: 0.5s;
  padding-bottom: 80px;

  @media screen and (max-width: 830px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 530px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Title = styled.p`
  font-size: 32px;
  font-weight: bold;
  padding: 48px 0;
`;

export const Modal = styled.div`
  text-align: center;
  position: relative;
  top: 100px;
`;

export const Icon = styled(BsHouseExclamation)`
  font-size: 200px;
  color: ${props => props.theme.primaryColor};
`;

export const Message = styled.p`
  margin: 30px;
  font-size: 30px;
`;

export const Content = styled.p`
  font-size: 20px;
  color: #b0b0b0;
`;
