import React from 'react';
import * as S from './StyleLogin';
import KakaoLogin from './KakaoLogin';

const Login = ({ showModal, setShowModal }) => {
  return (
    <S.LoginContainer>
      <S.LoginHeader>스페이스 어라운드에 오신 것을 환영합니다.</S.LoginHeader>
      <S.LoginInput type="text" placeholder="전화번호" />
      <S.LoginButton type="submitBtn">계속</S.LoginButton>
      <S.LoginWrapper>
        <S.LoginBorder />
        <S.LoginText>또는</S.LoginText>
        <S.LoginBorder />
      </S.LoginWrapper>
      <KakaoLogin />
      <S.LoginButton type="loginLink">네이버로 로그인하기</S.LoginButton>
      <S.LoginButton type="loginLink">구글로 로그인하기</S.LoginButton>
    </S.LoginContainer>
  );
};

export default Login;
