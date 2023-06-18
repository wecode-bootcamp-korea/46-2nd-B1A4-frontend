import { useEffect } from 'react';

const NaverLogin = ({ setGetToken, setUserInfo }) => {
  const { naver } = window;
  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: process.env.NAVER_CLIENT_ID,
      callbackUrl: process.env.REDIRECT_URI,
      isPopup: false,
      loginButton: { color: 'green', type: 2, height: 40 },
      callbackHandle: true,
    });

    naverLogin.init();
  };

  const userAccessToken = () => {
    window.location.href.includes('access_token') && getToken();
  };
  const getToken = () => {
    const token = window.location.href.split('=')[1].split('&')[0];
    localStorage.setItem('access_token', token);
  };
  useEffect(() => {
    initializeNaverLogin();
    userAccessToken();
  }, []);

  return <div id="naverIdLogin"> </div>;
};

export default NaverLogin;
