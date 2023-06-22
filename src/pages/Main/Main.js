import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSearchParams } from 'react-router-dom';
import StudioCard from '../../components/StudioCard/StudioCard';
import MainMap from './MainMap';
import { MainBackground, Container } from './StyleMain';

const Main = () => {
  const [mockData, setMockData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [ref, inView] = useInView();
  const [studioCardData, setStudioCardData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMapOpen, setIsMapOpen] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const LIMIT = 9;
  const nextOffset = LIMIT + offset;

  // 추후 mockData 통신
  useEffect(() => {
    fetch(
      `${
        process.env.REACT_APP_SERVER_HOST
      }/studios/filter?studioCategoryId=1&offset=${
        nextOffset - 9
      }&limit=${LIMIT}`
    )
      .then(res => res.json())
      .then(data => {
        setMockData(data.data);
      });
  }, []);

  // useEffect(() => {
  //   fetch(
  //     `http://10.58.52.71:8001/studios/filter?studioCategoryId=1&offset=${
  //       nextOffset - 9
  //     }&limit=${LIMIT}`
  //   )
  //     .then(res => res.json())
  //     .then(data => {
  //       setFilterData(prev => prev.concat(data.data));
  //       setOffset(prev => prev + LIMIT);
  //     });
  // }, [inView]);

  const params = searchParams.get('map_open');

  useEffect(() => {
    setIsMapOpen(params === 'true');
  }, [params]);

  // if (!studioCardData.length) return null;

  // 추후 mockData 통신
  // if (mockData.length === 0) return null;

  return (
    <>
      {/* 추후 mockData 통신 */}
      {/* <Container>
        {mockData &&
          mockData.map(list => {
            return (
              <StudioCard key={list.studioId} list={list} settings={settings} />
            );
          })}
      </Container> */}

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
                />
              );
            })}
            <div ref={ref}></div>
          </Container>
        )}
      </MainBackground>
    </>
  );
};

export default Main;
