import styled from 'styled-components';

export const StyleReview = styled.div`
  height: 90vh;
  padding-bottom: 60px;
`;
export const ReviewHeader = styled.div`
  z-index: 1;
  position: sticky;
  top: 0;
  background-color: white;
  width: 100%;
  border-radius: 15px 15px 0px 0px;
  padding: 20px;
`;
export const BoldSpan = styled.span`
  font-weight: 600;
  font-size: 14px;
`;

export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const CloseBtn = styled.button`
  background-color: white;
  border: none;
  outline: none;
  margin-bottom: 30px;

  &:hover {
    cursor: pointer;
  }
`;

export const H2 = styled.h2`
  font-weight: 700;
  font-size: 30px;
`;

export const Star = styled.span`
  color: ${props => props.theme.primaryColor};
`;

export const ReviewCountSpan = styled.span`
  margin-left: 10px;
`;

export const SearchDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #f4f4f4;
  border: 1px solid #f4f4f4;
  border-radius: 25px;
  width: 100%;
  margin-top: 20px;
  padding-left: 20px;
`;

export const SearchInput = styled.input`
  padding: 15px 10px;
  border: none;
  background-color: #f4f4f4;
  outline: none;
  width: 95%;
`;

export const Body = styled.div`
  height: 76%;
  min-width: 340px;
  overflow-y: scroll;
`;

export const ReviewBody = styled.div`
  padding: 20px;
  width: 100%;
`;

export const UserReview = styled.div`
  margin-top: 20px;
`;

export const UserReviewInner = styled.div`
  font-weight: 300;
  font-size: 15px;
  line-height: 1.3;
  height: 100%;
`;

export const BodyContainer = styled.div`
  /* display: flex;
  flex-direction: column; */
`;

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const UserImg = styled.div`
  min-width: 40px;
  height: 40px;
  background-position: 40xpx 40px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${props => props.imgSrc});
  border: 1px solid #eef0f3;
  padding: 15px;
  border-radius: 50%;
`;
export const NameSpan = styled.span`
  font-weight: 600;
  font-size: 18px;
`;
export const GraySpan = styled.span`
  margin-top: 3px;
  font-weight: 300;
  font-size: 14px;
  color: gray;
`;

export const BodyInner = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
export const BodyReview = styled.div``;
export const ReviewInner = styled.div`
  height: 90px;
`;

export const ReviewBtn = styled.button`
  padding: 13px 15px;
  border: none;
  background-color: white;
  border-radius: 7px;
  font-size: 13px;
  font-weight: 400;
  color: ${props => props.theme.primaryColor};
  border: 1px solid ${props => props.theme.primaryColor};
`;

export const ReviewFooter = styled.div``;
