import React, { useEffect, useRef } from 'react';
import { MapContainer, Map } from './StyleMainMap';
import { useNavigate } from 'react-router-dom';
const { kakao } = window;

const MainMap = () => {
  const mapRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(36.3437387096971, 127.41027496730207),
      level: 12,
    };

    mapRef.current = new kakao.maps.Map(container, options);

    const overlayInfos = productInfos?.map(info => {
      return {
        title: info.title,
        lat: info.lat,
        lng: info.lng,
        img: info.img[0],
        price: info.price,
        region: info.region,
      };
    });

    const imageSrc =
      'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';

    overlayInfos.forEach(el => {
      const imageSize = new kakao.maps.Size(24, 35);
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
      let positions = new kakao.maps.LatLng(el.lat, el.lng);

      let marker = new kakao.maps.Marker({
        map: mapRef.current,
        position: positions,
        image: markerImage,
      });

      let content = document.createElement('div');
      content.classList.add('overlayWrap');

      const studioImg = document.createElement('img');
      studioImg.classList.add('overlayImg');
      studioImg.src = el.img;
      content.appendChild(studioImg);
      studioImg.onclick = function () {
        navigate('/detail/1');
      };

      const textContainer = document.createElement('div');
      textContainer.classList.add('textContainer');
      content.appendChild(textContainer);

      const accommWrap = document.createElement('div');
      accommWrap.classList.add('accommInfoWrap');
      textContainer.appendChild(accommWrap);
      accommWrap.onclick = function () {
        navigate('/detail/1');
      };

      const studioName = document.createElement('h1');
      studioName.appendChild(document.createTextNode(`${el.title}`));
      studioName.classList.add('accommName');
      accommWrap.appendChild(studioName);

      const studioRegion = document.createElement('p');
      studioRegion.appendChild(document.createTextNode(`${el.region}`));
      studioRegion.classList.add('accommRegion');
      accommWrap.appendChild(studioRegion);

      const btnContainer = document.createElement('div');
      btnContainer.classList.add('btnContainer');
      textContainer.appendChild(btnContainer);

      const closeBtn = document.createElement('button');
      closeBtn.classList.add('closeBtn');
      closeBtn.appendChild(document.createTextNode('×'));
      closeBtn.onclick = function () {
        customOverlay.setMap(null);
      };
      btnContainer.appendChild(closeBtn);

      const price = el.price.toLocaleString();
      const contentPrice = document.createElement('div');
      contentPrice.classList.add('overlayPrice');
      contentPrice.appendChild(document.createTextNode(`₩${price}`));
      contentPrice.onclick = () => {
        customOverlay.setMap(mapRef.current);
      };

      const customOverlay = new kakao.maps.CustomOverlay({
        position: positions,
        content: content,
        xAnchor: 0.46,
        yAnchor: 1.22,
      });

      const customOverlayPrice = new kakao.maps.CustomOverlay({
        position: positions,
        content: contentPrice,
        yAnchor: 1.5,
      });
      customOverlayPrice.setMap(mapRef.current);

      kakao.maps.event.addListener(marker, 'click', function () {
        customOverlay.setMap(mapRef.current);
      });
    });
  }, []);

  return (
    <MapContainer>
      <Map id="map"></Map>
    </MapContainer>
  );
};

export default MainMap;

const productInfos = [
  {
    title: '팀 스튜디오',
    lat: 37.62197524055062,
    lng: 127.16017523675508,
    img: ['/images/room6.jpg'],
    price: '30000',
    region: '역삼동',
  },
  {
    title: '민지 스튜디오',
    lat: 37.22197524055062,
    lng: 127.0383774403176,
    img: ['/images/room5.jpg'],
    price: '40000',
    region: '삼성동',
  },
  {
    title: '자현 스튜디오',
    lat: 36.48232513883755,
    lng: 127.35824367516048,
    img: ['/images/room7.jpg'],
    price: '20000',
    region: '대치동',
  },
  {
    title: '재웅 스튜디오',
    lat: 36.78656273069659,
    lng: 126.45211256646381,
    img: ['/images/room9.jpg'],
    price: '15000',
    region: '연희동',
  },
];
