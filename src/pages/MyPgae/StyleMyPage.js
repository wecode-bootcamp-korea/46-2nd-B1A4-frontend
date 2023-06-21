import styled from 'styled-components';
import { AiOutlineCheck } from 'react-icons/ai';

export const Container = styled.div`
  padding: 64px 80px;
  display: flex;
`;

export const Box = styled.div`
  display: flex;
  flex: 1 1 auto;
  max-width: 1162px;
  margin: 0 auto;
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrap = styled.div``;

export const ProfileBox = styled.div`
  border-radius: 20px;
  padding: 32px 44px;
  border: none;
  text-align: center;
  box-shadow: 3px 3px 15px #b0b0b0;
  margin-bottom: 40px;
  display: flex;
`;

export const Wrapper = styled.div`
  width: 50%;
`;

export const ProfileYear = styled.div`
  width: 50%;
  margin-left: 60px;
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  align-items: center;
`;

export const Year = styled.p`
  font-size: 22px;
  font-weight: 700;
`;

export const ProfileImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const ProfileName = styled.p`
  font-size: 32px;
  font-weight: 500;
`;

export const ProfileContent = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-top: 10px;
`;

export const Icon = styled(AiOutlineCheck)`
  font-size: 22px;
  margin-right: 20px;
`;

export const CertifiedBox = styled.div`
  border-radius: 20px;
  padding: 32px 24px;
  border: none;
  box-shadow: 3px 3px 15px #b0b0b0;
`;

export const Line = styled.div`
  padding-top: 30px;
  display: flex;
`;

export const Ptag = styled.p`
  font-size: 22px;
`;

export const Link = styled.p`
  font-size: 15px;
  padding-top: 30px;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
  }
`;

export const WritingBox = styled.div`
  padding-left: 80px;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WriteWrap = styled.div`
  width: 60%;
  border-top: 1px solid #b0b0b0;
  padding-top: 40px;
`;

export const SmallPtag = styled.p`
  font-size: 15px;
  color: #b0b0b0;
  margin-top: 25px;
`;

export const Button = styled.button`
  margin-top: 25px;
  color: white;
  border: none;
  background-color: ${props => props.theme.primaryColor};
  width: 40%;
  padding: 15px;
  border-radius: 10px;
  font-size: 15px;

  &:hover {
    cursor: pointer;
  }
`;
