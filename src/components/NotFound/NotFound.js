import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './StyleNotFound';

const NotFound = () => {
  const navigate = useNavigate();

  const handleMainLink = () => {
    navigate('/main');
  };

  return (
    <div>
      <S.NotFoundNav>
        <S.LogoImgDiv imgSrc="/images/logo_v1.png" onClick={handleMainLink} />
      </S.NotFoundNav>
      <S.StyleNotFound imgSrc="/images/404">NotFound</S.StyleNotFound>
    </div>
  );
};

export default NotFound;
