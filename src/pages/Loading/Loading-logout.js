import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CircularIndeterminate from './Spinner';
import { LoadingContainer, LoadingText } from './StyleLoading';

const LoadingLogOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const access_token = localStorage.getItem('access_token');
    fetch(`https://kapi.kakao.com/v1/user/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.id) {
          alert('로그아웃 성공 🍔');
          navigate('/main');
          localStorage.removeItem('access_token');
        }
      });
  }, []);

  return (
    <LoadingContainer>
      <CircularIndeterminate />
      <LoadingText>Loading...</LoadingText>
    </LoadingContainer>
  );
};

export default LoadingLogOut;
