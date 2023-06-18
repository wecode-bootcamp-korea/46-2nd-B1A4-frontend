import styled, { css } from 'styled-components';

export const VerticalLine = styled.div`
  width: 1px;
  height: 55%;
  background-color: lightgray;
`;

export const NavBox = styled.div`
  position: relative;
  padding: 24px 10%;
  color: #595959;
  border-radius: 32px;
  font-size: 0.85rem;
  font-weight: 500;
  ${props => props.theme.flexBox('row', 'center', 'center')};
  ${props =>
    props.isNavOpen &&
    css`
      width: 35%;
      min-width: 180px;
      font-size: 0.95rem;
      :hover {
        background-color: rgba(221, 221, 221, 0.3);
      }
    `};
`;
