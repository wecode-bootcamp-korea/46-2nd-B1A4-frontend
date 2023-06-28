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

  const getFetch = () => {
    fetch(`${process.env.REACT_APP_SERVER_HOST}/users/like`, {
      headers: {
        Authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(res => res.json())
      .then(data => setWishlistData(data.data));
  };

  // useEffect(() => {
  //   fetch('/data/wishlistData.json')
  //     .then(res => res.json())
  //     .then(data => setWishlistData(data.data));
  // }, []);

  useEffect(() => {
    getFetch();
  }, []);

  return (
    <S.Container>
      <S.Title>위시리스트</S.Title>
      {wishlistData.length > 0 ? (
        <S.Wrap>
          {wishlistData.map(list => {
            return (
              <StudioCard
                key={list.id}
                list={list}
                settings={settings}
                getFetch={getFetch}
              />
            );
          })}
        </S.Wrap>
      ) : (
        <S.Modal>
          <S.Icon />
          <S.Message>첫 번째 위시리스트 만들기</S.Message>
          <S.Content>
            검색 중에 마음에 드는 숙소나 체험을 위시리스트에 저장하려면 하트
            아이콘을 클릭하세요.
          </S.Content>
        </S.Modal>
      )}
    </S.Container>
  );
};

export default Wishlist;
