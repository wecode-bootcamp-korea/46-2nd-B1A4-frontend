import styled from 'styled-components';

export const LoginButton = styled.button`
  width: 100%;
  height: 48px;
  margin: 10px 0;
  padding: 15px 25px;
  color: black;
  background-color: white;
  border: 1.5px solid ${props => props.theme.primaryColor};
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  :hover {
    box-shadow: 1px 1px 4px #bfbfbf;
  }
`;
