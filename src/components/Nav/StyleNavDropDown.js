import styled, { keyframes } from 'styled-components';

const dropDownAnimation = keyframes`
 0% { top: 62px; opacity: 0.1; }
 100% { top: 72px; opacity: 1;  }
`;

export const DropDownContainer = styled.div`
  ${props => props.theme.flexBox('column', 'center', 'center')};
  position: absolute;
  top: 72px;
  width: ${props => props.width};
  height: ${props => props.height};
  padding: 10px;
  background-color: white;
  border: 1px solid #dddddd;
  border-radius: 25px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05);
  animation: ${dropDownAnimation} 0.7s;
`;

export const LocationDropDownBox = styled.span`
  width: 100%;
  padding: 12px 40px;
  color: #595959;
  font-size: 0.925rem;
  text-align: center;
  cursor: pointer;
  :hover {
    background-color: ${props => props.theme.primaryColor};
    border-radius: 20px;
  }
`;

export const ModalCount = styled.div`
  ${props => props.theme.flexBox('row', 'center', 'space-between')};
  width: 180px;
  padding: 25px 0px;
`;

export const CountBtn = styled.button`
  width: 46px;
  height: 46px;
  border: none;
  color: white;
  font-size: 25px;
  background-color: ${props => props.theme.primaryColor};

  &:hover {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  font-size: 14px;
  background: none;
  border: none;
  color: #b0b0b0;
  padding: 0 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const PlusMinusIcon = styled.div`
  font-size: 25px;
`;

export const InputBox = styled.input`
  width: 30%;
  text-align: center;
  border: 1px solid ${props => props.theme.primaryColor};

  &:focus {
    outline: none;
  }
`;
