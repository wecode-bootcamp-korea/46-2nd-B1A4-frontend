import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyleNotFound = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NotFoundNav = styled.div`
  height: 80px;
  border-bottom: 1px solid lightgray;
  display: flex;
`;

export const LogoImgDiv = styled.div`
  margin-top: 10px;
  width: 140px;
  height: 60px;
  background-position: 140px 60px;
  background-size: cover;
  background-image: url(${props => props.imgSrc});

  &:hover {
    cursor: pointer;
  }
`;

export const NotContainer = styled.div`
  height: calc(100vh - 180px);
  background-color: ${props => props.theme.primaryColor};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const NotInner = styled.div`
  width: 80%;
  height: 90%;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
`;
export const WrapperLeftInner = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const WrapperLeft = styled.div`
  width: 50%;
  color: white;
`;

export const WrapperRight = styled.div`
  margin-left: 10%;
  width: 40%;
`;

export const WrapperImg = styled.div`
  width: 80%;
  height: 100%;
  background-position: 40% 100%;
  background-size: cover;
  background-image: url(${props => props.imgSrc});
`;

export const BigDiv = styled.div`
  font-weight: 800;
  font-size: 6rem;
`;

export const MidDiv = styled.div`
  font-weight: 800;
  font-size: 1.7rem;
`;

export const UlStyle = styled.ul`
  list-style: none;
`;
export const LiStyle = styled.li`
  width: 100%;
  margin: 10px 0px;
  font-weight: 600;
`;

export const NotFoundLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: inline-block;

  &:after {
    width: 100%;
    display: block;
    content: '';
    border-bottom: solid 2px white;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  &:hover:after {
    transform: scaleX(1);
  }
`;
