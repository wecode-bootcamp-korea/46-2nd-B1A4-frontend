import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import StudioCard from '../../components/StudioCard/StudioCard';
import { Container, MainBackground } from './StyleMain';

const Main = () => {
  const [filterData, setFilterData] = useState([]);
  const [ref, inView] = useInView();
  const [searchParams, setSearchParams] = useSearchParams();
  const studioCategoryId = searchParams.get('studioCategoryId');

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const OFFSET = 0;
  let limit = searchParams.get('limit');

  // 추후 mockData 통신
  // useEffect(() => {
  //   fetch(`/data/main.json`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setFilterData(data.data);
  //     });
  // }, []);

  useEffect(() => {
    let currentLimit = inView ? Number(limit) + 9 : limit;

    fetch(
      `http://10.58.52.145:8000/studios/filter?studioCategoryId=${studioCategoryId}&offset=${OFFSET}&limit=${currentLimit}`
    )
      .then(res => res.json())
      .then(data => {
        setFilterData(data.data);
      });

    searchParams.set('limit', currentLimit);
    setSearchParams(searchParams);
  }, [inView, studioCategoryId]);

  if (filterData.length === 0) return null;

  return (
    <>
      {/* 추후 mockData 통신 - 무한스크롤 기능 X */}
      {/* <MainBackground>
        <Container>
          {filterData.map(list => {
            return (
              <StudioCard key={list.studioId} list={list} settings={settings} />
            );
          })}
          <div ref={ref}></div>
        </Container>
      </MainBackground> */}
      {/* API 통신 - 무한스크롤 기능 O */}
      <MainBackground>
        <Container>
          {filterData.map(list => {
            return (
              <StudioCard key={list.studioId} list={list} settings={settings} />
            );
          })}
          <div ref={ref}></div>
        </Container>
      </MainBackground>
    </>
  );
};

export default Main;
