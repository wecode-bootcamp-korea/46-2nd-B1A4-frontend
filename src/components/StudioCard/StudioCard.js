import React, { useState } from 'react';
import * as S from './StyleStudioCard';

const StudioCard = ({ list, settings }) => {
  const [isWishlistAdd, setIsWishlistAdd] = useState(false);

  const handleWishBtn = () => {
    setIsWishlistAdd(prev => !prev);
  };

  return (
    <S.Card>
      <S.WishBtn onClick={handleWishBtn}>
        {isWishlistAdd ? (
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
