import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NotFoundData } from '../../uiData/notFoundData';
import * as S from './StyleNotFound';

const NotFound = () => {
  const navigate = useNavigate();

  const handleMainLink = () => {
    navigate('/main');
  };

  return (
    <S.StyleNotFound>
      <S.NotFoundNav>
        <S.LogoImgDiv imgSrc="/images/logo_v1.png" onClick={handleMainLink} />
      </S.NotFoundNav>
      <S.NotContainer>
        <S.NotInner>
          <div>
            <S.WrapperLeftInner>
              <S.BigDiv>404</S.BigDiv>
              <S.BigDiv>Lost in Space</S.BigDiv>
              <div>
                <S.MidDiv>검색하시려는 페이지를 찾을 수 없습니다.</S.MidDiv>
                {NotFoundData.map(not => {
                  return (
                    <S.UlStyle key={not.id}>
                      <S.LiStyle>
                        <S.NotFoundLink to={not.link}>
                          {not.name}
                        </S.NotFoundLink>
                      </S.LiStyle>
                    </S.UlStyle>
                  );
                })}
              </div>
            </S.WrapperLeftInner>
          </div>
          <S.WrapperRight>
            <S.WrapperImg imgSrc="/images/notFound.png" />
          </S.WrapperRight>
        </S.NotInner>
      </S.NotContainer>
    </S.StyleNotFound>
  );
};

export default NotFound;
