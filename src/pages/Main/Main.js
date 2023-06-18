import React, { useEffect, useState } from 'react';
import StudioCard from '../../components/StudioCard/StudioCard';
import { Container } from './StyleMain';

const Main = () => {
  const [studioCardData, setStudioCardData] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    fetch('/data/main.json')
      .then(res => res.json())
      .then(data => {
        setStudioCardData(data.list);
      });
  }, []);

  return (
    <Container>
      {studioCardData.map(list => {
        return <StudioCard key={list.id} list={list} settings={settings} />;
      })}
    </Container>
  );
};

export default Main;
