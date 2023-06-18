import styled from 'styled-components';

export const StyleFilter = styled.div`
  height: 100%;
`;

export const H2 = styled.h2`
  font-weight: 400;
  font-size: 1.3em;
  margin-bottom: 10px;
`;

export const GraySpan = styled.span`
  font-weight: 350;
  font-size: 15px;
  color: #929292;
`;

export const TitleSpan = styled.span`
  font-weight: 350;
  font-size: 17px;
  color: black;
  margin-bottom: 6px;
`;

export const GraySmallSpan = styled.span`
  font-weight: 350;
  font-size: 14px;
  color: #929292;
`;

export const BoldSpan = styled.span`
  font-weight: 600;
  font-size: 14px;
`;

export const Header = styled.div`
  z-index: 1;
  position: sticky;
  top: 0;
  background-color: white;
  width: 100%;
  border-radius: 15px 15px 0px 0px;
`;

export const HeaderDiv = styled.div`
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #ebebeb;
`;

export const CloseBtn = styled.button`
  background-color: white;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const Body = styled.div`
  min-width: 340px;
  overflow-y: scroll;
  overflow-x: hidden;
  height: calc(100% - 120px);
`;

export const BodyDiv = styled.div`
  border-bottom: 1px solid #ebebeb;
  padding: 20px 24px;
  min-width: 340px;
`;

export const BodyContainer = styled.div`
  padding: 8px 20px 0px 20px;
`;

export const BodyInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 25px;
`;

export const BodyWrapper = styled.div`
  border-radius: 1em;
  padding: 10px;
  border: 1px solid #b0b0b0;
  width: 100%;
`;

export const BodyWrapperDiv = styled.div`
  padding: 23px 8px 0px 8px;
`;

export const FeeDiv = styled.div`
  padding: 8px 0px 0px 2px;
`;

export const FeeInput = styled.input`
  padding: 5px 12px 6px 5px;
  border: none;
  font-size: 18px;
  width: 100%;
  outline: none;
`;

export const BodyWrapperInner = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BodyTypeDiv = styled.div`
  display: inline-block;
  min-width: 340px;
`;

export const BodyTypeFilter = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 30px;
`;

export const BodyTypeFilterInner = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MoreDiv = styled.div`
  margin-top: 20px;
  cursor: pointer;
`;

export const MoreSpan = styled.span`
  text-decoration: underline;
  font-size: 17px;
  font-weight: 400;
  cursor: pointer;
`;

export const Footer = styled.div`
  position: sticky;
  bottom: 0;
  background-color: white;
  width: 100%;
  border-radius: 0px 0px 15px 15px;
  border-top: 1px solid #ebebeb;
  padding: 8px 12px;
`;

export const FooterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const AllCancelSpan = styled.span`
  text-decoration: underline;
  font-size: 17px;
  font-weight: 400;
  cursor: pointer;
`;

export const BlackBtn = styled.button`
  padding: 15px 20px;
  border: none;
  background-color: ${props => props.theme.primaryColor};
  border-radius: 7px;
  font-size: 17px;
  font-weight: 400;
  color: white;
  cursor: pointer;
`;

export const RangeBox = styled.div``;
export const RangeBoxInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 3px;
`;

export const RangeDiv = styled.div`
  width: calc(100% - ${props => props.price}px);
  height: ${props => props.price}px;
  background-color: ${props => props.theme.primaryColor};
`;

export const Slider = styled.div`
  width: 100%;
`;
