import styled from 'styled-components';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 200px;
  z-index: 10000;
  ${props => props.theme.flexBox('column', 'center', 'center')}
`;

export const Header = styled.h1`
  min-width: 470px;
  margin-bottom: 10px;
  font-size: 2rem;
  color: #5b5b5b;
`;

export const UploadBtn = styled.button`
  background-color: ${props => props.theme.primaryColor};
  min-width: 180px;
  margin: 40px 0;
  padding: 14px 30px;
  border: none;
  border-radius: 12px;
  color: white;
  font-weight: 500;
  font-size: 1rem;
  z-index: 10000;
  cursor: pointer;
`;
