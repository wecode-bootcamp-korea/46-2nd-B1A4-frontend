import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyleFooterDataInner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

export const StyleFooterDataWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 30px;
`;

export const FooterDataLi = styled.li`
  margin-bottom: 25px;
  color: #737373;
  font-size: 14px;
`;
export const FooterDataH2 = styled.h2`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 20px;
`;
export const FooterDataLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  color: inherit;
  display: inline-block;
  position: relative;
  &:after {
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 1px;
    content: '';
    background-color: #737373;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  &:hover:after {
    transform: scaleX(1);
  }
`;
