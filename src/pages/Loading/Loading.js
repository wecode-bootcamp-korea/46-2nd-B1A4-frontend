import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CircularIndeterminate from './Spinner';
import { LoadingContainer, LoadingText } from './StyleLoading';

const Loading = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.toString()).searchParams.get('code');

  useEffect(() => {
    fetch(
      `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.REST_API_KEY}&redirect_uri=${process.env.REDIRECT_URI}&code=${code}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      }
    )
      .then(res => res.json())
      .then(data => {
        const access_token = data.access_token;
        fetch(`${process.env.REACT_APP_SERVER_HOST}/users/kakao`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ accessToken: access_token }),
        })
          .then(res => res.json())
          .then(data => {
            if (data.accessToken) {
              alert('로그인성공!');
              navigate('/main');
            }
          })
          .catch(err => console.error(err));
      });
  }, []);

  return (
    <LoadingContainer>
      <CircularIndeterminate />
      <LoadingText>Loading...</LoadingText>
    </LoadingContainer>
  );
};

export default Loading;
