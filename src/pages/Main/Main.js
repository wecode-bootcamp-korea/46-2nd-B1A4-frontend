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

  useEffect(() => {
    searchParams.set('limit', 9);
    searchParams.set('studioCategoryId', 1);
    setSearchParams(searchParams);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const OFFSET = 0;
  let limit = searchParams.get('limit');

  const getFetch = () => {
    let currentLimit = inView ? Number(limit) + 9 : limit;
    if (localStorage.getItem('accessToken')) {
      fetch(
        `${process.env.REACT_APP_SERVER_HOST}/studios/filter?studioCategoryId=${studioCategoryId}&offset=${OFFSET}&limit=${currentLimit}`,
        { headers: { Authorization: localStorage.getItem('accessToken') } }
      )
        .then(res => res.json())
        .then(data => {
          setFilterData(data.data);
        });
    } else {
      fetch(
        `${process.env.REACT_APP_SERVER_HOST}/studios/filter?studioCategoryId=${studioCategoryId}&offset=${OFFSET}&limit=${currentLimit}`
      )
        .then(res => res.json())
        .then(data => {
          setFilterData(data.data);
        });
    }

    searchParams.set('limit', currentLimit);
    setSearchParams(searchParams);
  };

  // 추후 mockData 통신
  // useEffect(() => {
  //   fetch(`/data/main.json`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setFilterData(data.data);
  //     });
  // }, []);

  useEffect(() => {
    getFetch();
  }, [inView, studioCategoryId]);

  if (!filterData) return null;

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
                getFetch={getFetch}
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
