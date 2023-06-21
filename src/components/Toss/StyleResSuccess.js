import styled from 'styled-components';

export const StyleResSuc = styled.div`
  height: 90vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const OrderNav = styled.div`
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

export const OrderContainer = styled.div``;

export const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const IconCheck = styled.span`
  color: ${props => props.theme.primaryColor};
  margin-right: 5px;
`;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  max-width: 800px;
  min-width: 300px;
  border-radius: 15px;
  border: 1px solid #eef0f3;
  box-shadow: 3px 3px 3px 3px lightgray;
  padding: 20px;

  @media screen and (max-width: 680px) {
    max-width: 400px;
  }
`;

export const ImgDiv = styled.div`
  width: 250px;
  height: 250px;
  min-width: 250px;
  min-height: 250px;
  background-position: 250px 250px;
  background-repeat: none;
  background-size: cover;
  background-size: 100%;
  border-radius: 10px;
  background-image: url(${props => props.imgSrc});
`;

export const ContainerLeftInner = styled.div`
  width: 250px;
  margin: 20px;
`;
export const ContainerRightInner = styled.div`
  width: 400px;
  height: 300px;
`;

export const RightTitle = styled.h1`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const OrderNum = styled.span`
  font-size: 1rem;
  font-weight: 400;
`;

export const H1 = styled.h1`
  font-size: 1.1rem;
  font-weight: 500;
`;

export const H2 = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  height: 30px;
  margin-top: 10px;
`;

export const Star = styled.span`
  color: ${props => props.theme.primaryColor};
  margin-left: 5px;
  margin-right: 2px;
`;

export const DescDiv = styled.div``;

export const SmallSpan = styled.span`
  font-size: 13px;
  font-weight: 600;
`;

export const GraySpan = styled.span`
  font-size: 13px;
  font-weight: 400;
  color: gray;
  margin-left: 5px;
`;

export const RevTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const RevWrapper = styled.div`
  padding: 20px;
`;

export const TopInnerLeft = styled.div``;

export const TopInnerRight = styled.div``;

export const MainBtn = styled.button`
  background-color: ${props => props.theme.primaryColor};
  border: none;
  color: white;
  padding: 10px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 16px;
  margin-top: 10px;
  width: 100%;

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.primaryColor};
    background-color: white;
    border: 1px solid ${props => props.theme.primaryColor};
  }
`;

export const Rotate = styled.span`
  margin-right: 5px;
`;
