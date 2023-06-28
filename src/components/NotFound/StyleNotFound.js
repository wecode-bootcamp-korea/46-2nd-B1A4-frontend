import styled from 'styled-components';

export const NotFoundNav = styled.div`
  height: 70px;
  border-bottom: 1px solid lightgray;
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
export const StyleNotFound = styled.div`
  height: calc(100vh - 180px);
  background-color: yellow;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
