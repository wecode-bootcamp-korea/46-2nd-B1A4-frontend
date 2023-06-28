import styled, { css } from 'styled-components';

export const StyleOrder = styled.div``;

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

export const OrderContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 80px;
`;

export const OrderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 900px;
`;

export const OrderTitle = styled.div`
  margin-top: 20px;
  padding: 60px 0px 15px 0px;
`;
export const OrderH2 = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
`;
export const OrderLeft = styled.div`
  width: 60%;
`;

export const OrderInner = styled.div`
  margin-bottom: 30px;
`;

export const OrderDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #eef0f3;
  padding: 24px;
`;

export const MidSpan = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const SmallDiv = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 5px;
  line-height: 1.3;
`;

export const ThinDiv = styled.div`
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.3;
`;

export const BoldSpan = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.3;
`;

export const MoreLink = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.3;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
  }
`;

export const RevTop = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 8px;
`;

export const RevBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const TopInnerLeft = styled.div`
  margin-right: auto;
`;

export const TopInnerRight = styled.div``;

export const AddBtn = styled.button`
  padding: 10px 15px;
  border-radius: 10px;
  border: none;
  background-color: ${props => props.theme.primaryColor};
  color: white;
  font-weight: 500;

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.primaryColor};
    background-color: white;
    border: 1px solid ${props => props.theme.primaryColor};
  }
`;

export const UpdateBtn = styled.button`
  text-decoration: underline;
  font-size: 0.9rem;
  color: black;
  border: none;
  background-color: white;
`;

export const OrderRight = styled.div`
  width: 40%;
  height: 350px;
  position: sticky;
  top: 10px;
  margin-left: 120px;
`;

export const OrderRightInner = styled.div`
  padding: 20px;
  border-radius: 15px;
  border: 1px solid #eef0f3;
  box-shadow: 3px 3px 3px 3px lightgray;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #eef0f3;
`;

export const HeaderInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: auto;
`;

export const DescDiv = styled.div`
  height: 50px;
`;

export const ImgDiv = styled.div`
  width: 100px;
  height: 100px;
  background-position: 200px 200px;
  background-size: cover;
  background-size: 100%;
  border-radius: 10px;
  background-image: url(${props => props.imgSrc});
`;

export const OrderAmountDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const H2 = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  height: 30px;
`;

export const SmallSpan = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
`;

export const GraySpan = styled.span`
  font-size: 0.8rem;
  font-weight: 400;
  color: gray;
  margin-left: 5px;
`;

export const OrderBtn = styled.button`
  background-color: ${props => props.theme.primaryColor};
  border: none;
  color: white;
  padding: 10px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1.1rem;
  margin-top: 10px;

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.primaryColor};
    background-color: white;
    border: 1px solid ${props => props.theme.primaryColor};
  }
`;

const selectedBtn = css`
  border: 2px solid ${props => props.theme.primaryColor};
`;

export const MethodBtn = styled.button`
  background-color: white;
  min-width: 110px;
  border: 1px solid #eef0f3;
  padding: 15px;
  border-radius: 10px;
  font-weight: 30;
  font-size: 0.8rem;
  margin-top: 10px;
  color: gray;
  ${props => props.isActive && selectedBtn}
`;

export const SimpleMethodBtn = styled.button`
  min-width: 110px;
  height: 50px;
  background-position: 120xpx 10px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${props => props.imgUrl});
  border: 1px solid #eef0f3;
  padding: 15px;
  border-radius: 10px;

  margin-top: 10px;
  color: gray;
  ${props => props.isActive && selectedBtn}
`;

export const Star = styled.span`
  color: ${props => props.theme.primaryColor};
`;

export const PhoneSelect = styled.select`
  padding: 10px;
  width: 110px;
  margin: 6px;
  border-radius: 10px;
  border: 1px solid #eef0f3;
  outline: none;
  option {
    background: black;
    color: #fff;
    padding: 3px 0;
  }
`;

export const PhoneInput = styled.input`
  padding: 10px;
  width: 110px;
  margin: 6px;
  border-radius: 10px;
  border: 1px solid #eef0f3;
  outline: none;
`;

export const PhoneBtn = styled.button`
  padding: 10px 15px;
  border-radius: 10px;
  border: none;
  background-color: ${props => props.theme.primaryColor};
  color: white;
  font-weight: 500;

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.primaryColor};
    background-color: white;
    border: 1px solid ${props => props.theme.primaryColor};
  }
`;

export const PhoneSaveBtn = styled.button`
  padding: 10px 15px;
  border-radius: 10px;
  border: none;
  background-color: ${props => props.theme.primaryColor};
  color: white;
  font-weight: 500;
  margin-top: 30px;

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.primaryColor};
    background-color: white;
    border: 1px solid ${props => props.theme.primaryColor};
  }
`;
