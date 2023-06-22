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
        {isWishlistAdd ? <S.FillHeart /> : <S.OutlineHeart />}
      </S.WishBtn>
      <S.StyledLink to={`/detail/${list.id}`}>
        <S.StyledSlider {...settings}>
          {list.image_url.map(img => {
            return <S.ImgBox key={list.id} src={img} />;
          })}
        </S.StyledSlider>
        <S.Title>{list.name}</S.Title>
        <S.Content>{list.address}</S.Content>
        <S.ContentPrice>
          ₩{Number(list.price).toLocaleString('en')}/시간
        </S.ContentPrice>
      </S.StyledLink>
    </S.Card>
  );
};

export default StudioCard;
