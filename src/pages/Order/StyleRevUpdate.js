import styled from 'styled-components';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

export const StyleRevOrder = styled.div`
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 20px;
  max-width: 800px;
  min-width: 340px;
  overflow-y: scroll;
  overflow-x: hidden;
  min-height: calc(100% - 140px);

  @media screen and (max-width: 800px) {
    max-width: 700px;
  }
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
`;

export const ContainerLeft = styled.div`
  width: 450px;
`;

export const TitleSpan = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const Exp = styled.span`
  font-size: 0.7rem;
  font-weight: 400;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContainerRight = styled.div`
  width: 250px;
  height: 100%;
`;

export const CalendarDiv = styled.div`
  width: 400px;
`;

export const TimePickerDiv = styled.div`
  width: 750px;
`;

export const CountDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Content = styled.div`
  width: 100%;
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
`;

export const BlackBtn = styled.button`
  padding: 15px 20px;
  border: none;
  background-color: ${props => props.theme.primaryColor};
  border-radius: 7px;
  font-size: 17px;
  font-weight: 400;
  color: white;
`;

export const CountBtn = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  color: white;
  font-size: 25px;
  background-color: ${props => props.theme.primaryColor};

  &:hover {
    cursor: pointer;
  }
`;

export const InputBox = styled.input`
  width: 70%;
  text-align: center;
  border: 1px solid ${props => props.theme.primaryColor};

  &:focus {
    outline: none;
  }
`;

export const MinusIcon = styled(AiOutlineMinus)`
  font-size: 20px;
`;

export const PlusIcon = styled(AiOutlinePlus)`
  font-size: 20px;
`;
