import { LoginButton } from './StyleKakaoLogin';

const SocialKakao = () => {
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REST_API_KEY}&redirect_uri=${process.env.REDIRECT_URI}&response_type=code`;

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  return <LoginButton onClick={handleLogin}>카카오로 로그인</LoginButton>;
};
export default SocialKakao;
