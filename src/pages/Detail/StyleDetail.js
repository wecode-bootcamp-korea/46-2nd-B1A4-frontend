import styled from 'styled-components';
import { BsDoorOpen, BsWifi } from 'react-icons/bs';
import {
  AiOutlineDown,
  AiOutlineClose,
  AiOutlineUp,
  AiFillCar,
  AiOutlinePlus,
  AiOutlineMinus,
} from 'react-icons/ai';
import { TimeTableBox } from 'reservation-time-table';

export const Container = styled.div`
  padding: 90px 80px 20px;

  @media screen and (max-width: 860px) {
    padding: 0 40px;
  }
`;

export const Main = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 26px;
  font-weight: 600;
  padding-top: 24px;
`;

export const Ptag = styled.p`
  font-size: 16px;
  font-weight: 500;
  padding-top: 16px;
`;

export const SubTitle = styled.p`
  font-size: 22px;
  margin-top: 30px;
`;

export const ImgBox = styled.div`
  padding-top: 24px;
  display: flex;
`;

export const MainImg = styled.img`
  width: 50%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;

  &:hover {
    cursor: pointer;
    filter: brightness(90%);
  }
`;

export const SubImgBox = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
`;

export const SubImg = styled.img`
  width: 47.4%;
  height: 48.8%;
  margin-left: 10px;

  &:hover {
    cursor: pointer;
    filter: brightness(90%);
  }

  @media screen and (max-width: 930px) {
    width: 45%;
  }
`;

export const BorderTopImg = styled(SubImg)`
  border-top-right-radius: 20px;
  margin-right: 0;

  &:hover {
    cursor: pointer;
    filter: brightness(90%);
  }
`;

export const BorderBottomImg = styled(SubImg)`
  border-bottom-right-radius: 20px;

  &:hover {
    cursor: pointer;
    filter: brightness(90%);
  }
`;

export const DescriptionContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 48px 0;
  border-bottom: 1px solid #b0b0b0;
`;

export const DescriptionBox = styled.div`
  width: 60%;
`;

export const ProfileBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #b0b0b0;
  padding-bottom: 24px;
`;

export const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const Notification = styled.div`
  padding: 24px 0;
  display: flex;
  align-items: center;
`;

export const IconImg = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  margin-right: 20px;
`;

export const Icon = styled(BsDoorOpen)`
  font-size: 30px;
  margin-right: 20px;
`;

export const WifiIcon = styled(BsWifi)`
  font-size: 30px;
  margin-right: 20px;
`;

export const CarIcon = styled(AiFillCar)`
  font-size: 30px;
  margin-right: 20px;
`;

export const BorderTop = styled.div`
  border-top: 1px solid #b0b0b0;
`;

export const Infor = styled.div`
  padding: 12px 0 24px 0;
  line-height: 1.5rem;
  border-bottom: 1px solid #b0b0b0;
`;

export const PriceBox = styled.div`
  width: 35%;
  height: 420px;
  margin-top: 24px;
  border-radius: 20px;
  border: 1px solid #b0b0b0;
  box-shadow: 3px 3px 10px 3px lightgray;
  position: sticky;
  top: 100px;
  padding: 0 30px;

  @media screen and (max-width: 792px) {
    height: 460px;
  }
`;

export const CheckBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 24px;
  border: 1px solid #b0b0b0;
  border-radius: 10px;
  line-height: 40px;
  text-align: left;
`;

export const CheckDate = styled.div`
  width: 50%;
  border-right: 1px solid #b0b0b0;
`;

export const CheckTime = styled.div`
  width: 50%;
  position: relative;
`;

export const CheckNum = styled.div`
  width: 100%;
  border-top: 1px solid #b0b0b0;
`;

export const CheckText = styled.p`
  padding: 0 10px;
  font-size: 14px;
`;

export const ExampleBox = styled.div`
  height: 1000px;
`;

export const Button = styled.button`
  font-size: 14px;
  background: none;
  border: none;
  color: #b0b0b0;
  padding: 0 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const Arrow = styled(AiOutlineDown)`
  position: absolute;
  right: 45px;
  font-size: 16px;
  color: black;
  font-weight: bold;
`;

export const ArrowUp = styled(AiOutlineUp)`
  position: absolute;
  right: 45px;
  font-size: 16px;
  color: black;
  font-weight: bold;
`;

export const TimeTable = styled(TimeTableBox)`
  padding-top: 310px;
`;

export const Modal = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 0.5s;
`;

export const ModalTime = styled.div`
  border: 1px solid #b0b0b0;
  border-radius: 20px;
  padding: 50px;
  background-color: white;
  width: 49%;
`;

export const ModalTitle = styled.p`
  font-size: 26px;
  margin-bottom: 48px;
`;

export const ModalBtn = styled.button`
  width: 100%;
  border-radius: 20px;
  margin-top: 20px;
  padding: 10px;
  font-size: 20px;
  color: white;
  border: none;
  background-color: ${props => props.theme.primaryColor};

  &:hover {
    cursor: pointer;
  }
`;

export const CloseIcon = styled(AiOutlineClose)`
  font-size: 26px;

  &:hover {
    cursor: pointer;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalCount = styled.div`
  position: absolute;
  left: 0;
  border: 1px solid #b0b0b0;
  border-radius: 20px;
  width: 100%;
  height: 130px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
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

export const MapContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding-bottom: 48px;
  border-bottom: 1px solid #b0b0b0;
`;

export const PrecautionsContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding-bottom: 24px;
  border-bottom: 1px solid #b0b0b0;
`;

export const BorderColor = styled.div`
  width: 30px;
  margin: 10px 0;
  border: 2px solid ${props => props.theme.primaryColor};
`;

export const Text = styled.p`
  font-size: 19px;
  padding-top: 20px;
`;

export const WarningText = styled(Text)`
  color: red;
`;

export const DateText = styled(Text)`
  color: #b0b0b0;
  margin-right: 30px;
`;

export const MinusIcon = styled(AiOutlineMinus)`
  font-size: 20px;
`;

export const PlusIcon = styled(AiOutlinePlus)`
  font-size: 20px;
`;
