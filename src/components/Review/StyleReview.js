import styled, { css } from 'styled-components';

export const StyleReview = styled.div`
  margin: -24px 0;
`;

export const Title = styled.h1`
  font-size: 26px;
  font-weight: 600;
`;

export const H2 = styled.h2`
  font-weight: 600;
  font-size: 18px;
`;

export const Star = styled.span`
  color: ${props => props.theme.primaryColor};
`;

export const ReviewCountSpan = styled.span`
  margin-left: 10px;
`;

export const ReviewBody = styled.div`
  display: inline-block;
  padding: 20px;
  width: 50%;
`;

export const UserReview = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const UserReviewInner = styled.div`
  font-weight: 300;
  font-size: 15px;
  line-height: 1.3;
  height: 60px;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-break: keep-all;
`;

const showBtn = css`
  display: block;
  visibility: visible;
`;

export const AddBtn = styled.button`
  top: 20px;
  display: none;
  border: none;
  background-color: white;
  padding: 0;
  ${props => props.isOverFlow && showBtn}
`;

export const MoreSpan = styled.span`
  font-weight: 500;
  font-size: 15px;
  border-bottom: 1px solid black;

  &:hover {
    cursor: pointer;
  }
`;

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const UserImg = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${props => props.imgSrc});
  border-radius: 50%;
`;
export const NameSpan = styled.span`
  font-weight: 600;
  font-size: 18px;
`;
export const GraySpan = styled.span`
  font-weight: 300;
  font-size: 14px;
  color: gray;
  margin-top: 3px;
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
  color: white;
  border-radius: 7px;
  font-size: 14px;
  font-weight: 400;
  background-color: ${props => props.theme.primaryColor};
  border: 1px solid ${props => props.theme.primaryColor};

  &:hover {
    cursor: pointer;
  }
`;

export const ReviewFooter = styled.div``;
