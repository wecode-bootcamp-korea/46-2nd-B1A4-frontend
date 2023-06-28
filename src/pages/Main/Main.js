import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useRecoilState } from 'recoil';
import StudioCard from '../../components/StudioCard/StudioCard';
import MainMap from './MainMap';
import { isLiked } from '../../recoilState';
import { Container, MainBackground } from './StyleMain';

const Main = () => {
  const [filterData, setFilterData] = useState([]);
  const [ref, inView] = useInView();
  const [searchParams, setSearchParams] = useSearchParams();
  const studioCategoryId = searchParams.get('studioCategoryId');
  const [isWishlistAdd, setIsWishlistAdd] = useState();
  const [like, setLike] = useRecoilState(isLiked);
  const [isMapOpen, setIsMapOpen] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const OFFSET = 0;
  const limit = searchParams.get('limit');

  useEffect(() => {
    if (limit) {
      let currentLimit = inView ? Number(limit) + 9 : limit;

      fetch(
        `${process.env.REACT_APP_SERVER_HOST}/studios/filter?studioCategoryId=${studioCategoryId}&offset=${OFFSET}&limit=${currentLimit}`,
        {
          headers: {
            Authorization: localStorage.getItem('accessToken'),
          },
        }
      )
        .then(res => res.json())
        .then(data => {
          setFilterData(data.data);
        });

      searchParams.set('limit', currentLimit);
      setSearchParams(searchParams);
    }
  }, [inView, studioCategoryId]);

  const params = searchParams.get('map_open');

  useEffect(() => {
    setIsMapOpen(params === 'true');
  }, [params]);

  if (filterData.length === 0) return null;

  return (
    <MainBackground>
      {isMapOpen ? (
        <MainMap />
      ) : (
        <Container>
          {filterData.map(list => {
            return (
              <StudioCard
                key={list.studioId}
                list={list}
                settings={settings}
                isWishlistAdd={isWishlistAdd}
                setIsWishlistAdd={setIsWishlistAdd}
              />
            );
          })}
          <div ref={ref}></div>
        </Container>
      )}
    </MainBackground>
  );
};

export default Main;
