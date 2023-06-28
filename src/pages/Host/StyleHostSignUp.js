import styled, { keyframes, css } from 'styled-components';

const headerAnimation = keyframes`
 0% {height: 50vh; opacity: 0; top: 10vh;}
 50% {height: 25vh; opacity: 0.5; top: 25vh;}
 100% {height: 25vh; opacity: 1; top: 25vh;}`;

const buttonAnimation = keyframes`
  0% {opacity: 0;}
  20% {opacity: 0; }
 100% {opacity: 1; }`;

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 100px 20% 20px;
  ${props => props.theme.flexBox('column', 'center', 'center')}
`;

export const Header = styled.h1`
  position: fixed;
  top: 25vh;
  min-width: 700px;
  font-size: 5rem;
  font-weight: 600;
  color: ${props => props.theme.primaryColor};
  line-height: 8rem;
  letter-spacing: 1rem;
  animation: ${headerAnimation} 3s;
`;

export const Button = styled.button`
  position: fixed;
  top: 55vh;
  width: 400px;
  margin: 60px;
  padding: 30px 40px;
  border: none;
  border-radius: 100px;
  background-color: ${props => props.theme.primaryColor};
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 3px;
  color: white;
  animation: ${buttonAnimation} 3s;
  cursor: pointer;
  :hover {
    box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.2);
  }
`;
