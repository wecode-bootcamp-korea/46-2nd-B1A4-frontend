import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { isLiked } from '../../recoilState';
import * as S from './StyleStudioCard';

const StudioCard = ({ list, settings, isWishlistAdd, setIsWishlistAdd }) => {
  const [isLike, setIsLike] = useRecoilState(isLiked);

  const handleWishBtn = () => {
    setIsLike(prev => !prev);
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_HOST}/users/like`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: localStorage.getItem('accessToken'),
      },
      body: JSON.stringify({
        studioId: list.studioId,
        liked: isLike,
      }),
    });
  }, [isLike]);

  return (
    <S.Card>
      <S.WishBtn onClick={handleWishBtn}>
        {isLike ? (
          <S.HeartImg src="/images/fillheart.png" />
        ) : (
          <S.HeartImg src="/images/blankheart.png" />
        )}
      </S.WishBtn>
      <S.StyledLink to={`/detail/${list.studioId}`}>
        <S.StyledSlider {...settings}>
          {list.studioImages.map(img => {
            return <S.Img key={list.studioId} src={img} />;
          })}
        </S.StyledSlider>
        <S.Title>
          {list.studioName}
          {list.averageRating && (
            <S.Average>
              <S.Icon />
              {list.averageRating}
            </S.Average>
          )}
        </S.Title>
        <S.Content>{list.studioAddress}</S.Content>
        <S.ContentPrice>
          ₩{Number(list.studioPrice).toLocaleString('en')}/시간
        </S.ContentPrice>
      </S.StyledLink>
    </S.Card>
  );
};

export default StudioCard;
