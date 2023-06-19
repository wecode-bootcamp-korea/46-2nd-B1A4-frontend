/*global kakao*/
import React, { useEffect } from 'react';
import styled from 'styled-components';

const Location = ({ latitude, longitude }) => {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(latitude, longitude),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);
    const markerPosition = new kakao.maps.LatLng(latitude, longitude);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return (
    <MapBox>
      <Map id="map"></Map>
    </MapBox>
  );
};

export default Location;

export const MapBox = styled.div`
  padding-top: 24px;
`;

export const Map = styled.div`
  width: 100%;
  height: 500px;
`;
