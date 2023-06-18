import styled from 'styled-components';

export const CheckboxInput = styled.input`
  width: 22px;
  height: 22px;
  margin-right: 20px;
  cursor: pointer;

  &:checked {
    accent-color: ${props => props.theme.primaryColor};
  }
`;
