import React from 'react';
import { useRecoilState } from 'recoil';
import { userInfo } from '../../recoilState';
import * as S from './StyleMyPage';

const MyPage = () => {
  const [myUserInfo, setMyUserInfo] = useRecoilState(userInfo);
  const { userFullName, userEmail, profileImage } = myUserInfo;

  return (
    <S.Container>
      <S.Box>
        <S.FlexBox>
          <S.ProfileBox>
            <S.Wrapper>
              <S.ProfileImg src={profileImage} />
              <S.ProfileName>{userFullName}</S.ProfileName>
              <S.ProfileContent>게스트</S.ProfileContent>
            </S.Wrapper>
            <S.ProfileYear>
              <S.Wrap>
                <S.Year>3</S.Year>
                <S.YearContent>Space Around 가입 기간(년)</S.YearContent>
              </S.Wrap>
            </S.ProfileYear>
          </S.ProfileBox>
          <S.CertifiedBox>
            <S.Year>재웅 님의 인증 정보</S.Year>
            <S.Line>
              <S.Icon />
              <S.Ptag>신분증</S.Ptag>
            </S.Line>
            <S.Line>
              <S.Icon />
              <S.Ptag>전화번호</S.Ptag>
            </S.Line>
            <S.Link>본인 인증 절차 자세히 알아보기</S.Link>
          </S.CertifiedBox>
        </S.FlexBox>
        <S.WritingBox>
          <S.WriteWrap>
            <S.Ptag>프로필을 작성해 보세요</S.Ptag>
            <S.SmallPtag>
              프로필은 스페이스어라운드를 통한 예약 과정에서 중요한 역할을
              합니다. 다른 호스트와 게스트에게 나를 알릴 수 있도록 프로필을
              작성하세요.
            </S.SmallPtag>
            <S.Button>프로필 작성하기</S.Button>
          </S.WriteWrap>
        </S.WritingBox>
      </S.Box>
    </S.Container>
  );
};

export default MyPage;
