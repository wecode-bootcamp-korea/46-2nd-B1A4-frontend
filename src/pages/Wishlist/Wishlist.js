import React, { useEffect, useState } from 'react';
import StudioCard from '../../components/StudioCard/StudioCard';
import * as S from './StyleWishlist';

const Wishlist = () => {
  const [wishlistData, setWishlistData] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    fetch('/data/wishlistData.json')
      .then(res => res.json())
      .then(data => setWishlistData(data.data));
  }, []);

  return (
    <S.Container>
      <S.Title>위시리스트</S.Title>
      <S.Wrap>
        {wishlistData.map(list => {
          return <StudioCard key={list.id} list={list} settings={settings} />;
        })}
      </S.Wrap>
    </S.Container>
  );
};

export default Wishlist;
