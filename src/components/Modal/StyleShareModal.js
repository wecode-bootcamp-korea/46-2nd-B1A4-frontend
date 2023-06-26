import styled from 'styled-components';
import { FaXmark } from 'react-icons/fa6';
import { AiFillStar, AiOutlineMail, AiOutlineMessage } from 'react-icons/ai';
import { VscCopy } from 'react-icons/vsc';
import { RiKakaoTalkLine } from 'react-icons/ri';

export const Container = styled.div`
  padding: 50px;
  margin: 0 auto;
`;

export const Close = styled(FaXmark)`
  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.p`
  font-size: 26px;
  padding: 30px 0;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  border-radius: 20px;
  margin-right: 20px;
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
  width: 46%;
  margin-top: 30px;
  border: 1px solid #b0b0b0;
  border-radius: 20px;
  margin-right: 20px;
  padding: 30px;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
