import styled, { css } from 'styled-components';
import { FaXmark } from 'react-icons/fa6';
import { AiFillStar, AiOutlineMail, AiOutlineMessage } from 'react-icons/ai';
import { VscCopy } from 'react-icons/vsc';
import { RiKakaoTalkLine } from 'react-icons/ri';
import { fadeInUp } from '../Modal/ReviewShowEffect';

export const Container = styled.div`
  padding: 40px;
  margin: 0 auto;
`;

export const Close = styled(FaXmark)`
  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.p`
  font-size: 26px;
  padding: 20px 0;
`;

export const Box = styled.div`
  width: 50%;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const Img = styled.img`
  width: 300px;
  height: 300px;
  object-fit: contain;
  border-radius: 20px;
  margin: 10px 20px 20px 0;
`;

export const Ptag = styled.p`
  font-size: 18px;
`;

export const Star = styled(AiFillStar)`
  font-size: 17px;
  position: relative;
  top: 0px;
  color: ${props => props.theme.primaryColor};
`;

export const Copy = styled(VscCopy)`
  font-size: 35px;
  margin-right: 20px;
`;

export const Mail = styled(AiOutlineMail)`
  font-size: 35px;
  margin-right: 20px;
`;

export const Message = styled(AiOutlineMessage)`
  font-size: 35px;
  margin-right: 20px;
`;

export const Kakao = styled(RiKakaoTalkLine)`
  font-size: 35px;
  margin-right: 20px;
`;

export const LinkBox = styled.div`
  width: 100%;
  margin-top: 10px;
  border: 1px solid #b0b0b0;
  border-radius: 20px;
  padding: 30px;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 800px;
  height: 63%;
  border-radius: 15px;
  border: none;
  background-color: white;
  overflow: hidden;

  ${props =>
    props.isOpenModal &&
    css`
      animation: ${fadeInUp} 0.5s ease;
    `}
`;
