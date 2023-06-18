import styled, { css } from 'styled-components';

export const LoginContainer = styled.div`
  ${props => props.theme.flexBox('column', 'center', 'center')};
  padding: 20px;
`;

export const LoginHeader = styled.div`
  display: block;
  width: 100%;
  margin: 16px 0;
  font-size: 1.3rem;
  font-weight: 500;
  text-align: left;
`;

export const LoginInput = styled.input`
  ::placeholder {
    color: #7a7a7a;
    font-size: 0.9rem;
  }
  :focus {
    outline: 1.5px solid #303030;
    border: none;
  }
  width: 100%;
  margin: 10px 0;
  padding: 18px;
  color: #303030;
  border: 1px solid #b0b0b0;
  border-radius: 8px;
  font-size: 1rem;
`;

const submitBtn = css`
  color: black;
  background-color: #ffc000;
  border: none;
`;

const loginLink = css`
  color: black;
  background-color: white;
  border: 1px solid black;
`;

const btnStyle = {
  submitBtn,
  loginLink,
};

export const LoginButton = styled.button`
  ${props => btnStyle[props.type]}
  width: 100%;
  height: 48px;
  margin: 10px 0;
  padding: 15px 25px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  :hover {
    box-shadow: 1px 1px 4px #bfbfbf;
  }
`;

export const LoginWrapper = styled.div`
  ${props => props.theme.flexBox('row', 'space-between', 'center')};
  width: 100%;
  padding: 10px 0;
`;

export const LoginText = styled.div`
  padding: 10px 1%;
  min-width: 32px;
  color: gray;
  font-size: 0.8rem;
  text-align: center;
`;

export const LoginBorder = styled.div`
  width: 41%;
  margin: 0 1.5%;
  height: 1px;
  background-color: #dddddd;
`;
