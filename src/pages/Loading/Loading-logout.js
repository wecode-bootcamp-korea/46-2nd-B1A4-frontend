import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CircularIndeterminate from './Spinner';
import { LoadingContainer, LoadingText } from './StyleLoading';

const LoadingLogOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://kauth.kakao.com/oauth/logout?client_id=${process.env.REACT_APP_REST_API_KEY}&logout_redirect_uri=${process.env.REACT_APP_LOGOUT_REDIRECT_URI}`
    ).then(res => {
      if (res.ok) {
        alert('로그아웃 성공 ☄️');
        localStorage.removeItem('accessToken');
        navigate('/?limit=9&studioCategoryId=1');
        refreshPage();
      }
    });
  }, []);

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <LoadingContainer>
      <CircularIndeterminate />
      <LoadingText>Loading...</LoadingText>
    </LoadingContainer>
  );
};

export default LoadingLogOut;
