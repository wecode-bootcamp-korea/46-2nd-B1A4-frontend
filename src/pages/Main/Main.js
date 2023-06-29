import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import StudioCard from '../../components/StudioCard/StudioCard';
import MainMap from './MainMap';
import { Container, MainBackground } from './StyleMain';

const Main = () => {
  const [filterData, setFilterData] = useState([]);
  const [ref, inView] = useInView();
  const [searchParams, setSearchParams] = useSearchParams();
  const studioCategoryId = searchParams.get('studioCategoryId');
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

  if (limit === 'NaN') {
    localStorage.removeItem('accessToken');
    fetch(
      `${process.env.REACT_APP_SERVER_HOST}/studios/filter?studioCategoryId=${studioCategoryId}&offset=${OFFSET}&limit=9`
    )
      .then(res => res.json())
      .then(data => {
        setFilterData(data.data);
      });
    searchParams.set('limit', 9);
    searchParams.set('studioCategoryId', 1);
    setSearchParams(searchParams);
  }

  const getFetch = () => {
    let currentLimit = inView ? Number(limit) + 9 : limit;
    const token = localStorage.getItem('accessToken');
    if (token && token !== undefined) {
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

  const params = searchParams.get('map_open');

  useEffect(() => {
    getFetch();
  }, [inView, studioCategoryId]);

  useEffect(() => {
    setIsMapOpen(params === 'true');
  }, [params]);

  if (!filterData) return null;

  return (
    <MainBackground>
      {isMapOpen ? (
        <MainMap filterData={filterData} />
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
