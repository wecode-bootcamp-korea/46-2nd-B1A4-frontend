import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyleFooter = styled.div`
  background-color: #f4f4f4;
  width: 100%;
`;

export const FooterContainer = styled.div`
  border-top: 1px solid #ebebeb;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: auto;
  padding: 20px 20px;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 1;
`;

export const FooterWrapperDiv = styled.div`
  display: flex;
  margin-right: auto;
  flex-grow: 1;
  font-weight: 350;
  font-size: 14px;
  margin-right: 10px;
`;

export const Ul = styled.ul`
  margin-left: 5px;
  list-style: none;
`;

export const Li = styled.li`
  float: left;
  font-weight: 350;
  font-size: 14px;
  margin-right: 10px;
  color: #464646;
`;

export const FooterLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  color: inherit;
  &:after {
    width: 90%;
    display: block;
    content: '';
    border-bottom: solid 1px black;
    transform: scaleX(0) translateX(10%);
    transition: transform 250ms ease-in-out;
  }
  &:hover:after {
    transform: scaleX(1) translateX(10%);
  }
`;

export const SlideDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 350;
  font-size: 15px;
  margin-right: 10px;
`;

export const FooterDiv = styled.div`
  border-top: 1px solid #dddddd;
  padding-top: 6px;
  font-weight: 350;
  font-size: 10px;
  color: #929292;
`;
