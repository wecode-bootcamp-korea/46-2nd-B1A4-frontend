import React, { useEffect, useState } from 'react';

import * as S from './StyleStudioCard';

const StudioCard = ({ list, settings, getFetch }) => {
  const [isLiked, setIsLiked] = useState(list.liked);

  const handleWishBtn = () => {
    if (!localStorage.getItem('accessToken')) {
      alert('로그인 후 이용해주세요.');
    } else {
      fetch(`${process.env.REACT_APP_SERVER_HOST}/users/like`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          Authorization: localStorage.getItem('accessToken'),
        },
        body: JSON.stringify({
          studioId: list.studioId,
          liked: isLiked,
        }),
      })
        .then(res => res.json())
        .then(data => {
          if (data.message === 'USER_LIKE_CHANGE_SUCCESS') {
            setIsLiked(prev => !prev);
          } else {
            alert('요청이 실패했습니다.');
          }
        });
    }
  };

  return (
    <S.Card>
      <S.WishBtn onClick={handleWishBtn}>
        {isLiked ? (
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
