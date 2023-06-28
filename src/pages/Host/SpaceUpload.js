import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { hostId, studioId } from '../../recoilState';
import PostCode from './PostCode';
import * as S from './StyleSpaceUpload';

const SpaceUpload = () => {
  const navigate = useNavigate();
  const [myHostId, setMyHostId] = useRecoilState(hostId);
  const [myStudioId, setMyStudioId] = useRecoilState(studioId);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isAddrEntered, setIsAddrEntered] = useState(false);
  const [mainAddress, setMainAddress] = useState('');
  const [subAddress, setSubAddress] = useState('');
  const [studioInfo, setStudioInfo] = useState({
    studioName: '',
    type: '',
    address: '',
    addressCity: '',
    addressNeighborHood: '',
    category: '',
    price: '',
    locationLatitude: '',
    locationLongitude: '',
    maxGuests: '',
    rules: `- 간단한 음료 외 음식물 반입은 불가합니다.
    - 각 룸간의 방음이 완벽하지 않아, 영상촬영의 경우 전체대관으로 예약 부탁드립니다.`,
    description: `- 촬영장비나 조명이 구비되어 있지 않습니다. 촬영 목적에 맞는 장비를 지참해주세요.
    - 사전에 캘린더 일정 확인 후 예약부탁드립니다.`,
  });
  const { studioName, type, category, price, maxGuests } = studioInfo;
  const reqInfo = { ...studioInfo, hostId: myHostId };
  let latitude,
    longitude = '';

  useEffect(() => {
    fetch(
      `https://dapi.kakao.com/v2/local/search/address.json?query=${mainAddress}`,
      {
        headers: {
          'content-type': 'application/json;charset=UTF-8',
          Authorization: `KakaoAK ${process.env.REACT_APP_REST_API_KEY}`,
        },
      }
    )
      .then(res => res.json())
      .then(data => {
        if (data.documents) {
          setStudioInfo({
            ...studioInfo,
            locationLatitude: data.documents[0].y.slice(0, 11),
            locationLongitude: data.documents[0].x.slice(0, 12),
          });
        }
      });
  }, [mainAddress]);

  const handleSubmitStudio = () => {
    fetch(`${process.env.REACT_APP_SERVER_HOST}/hosts/studio`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('accessToken'),
      },
      body: JSON.stringify(reqInfo),
    })
      .then(res => res.json())
      .then(data => {
        if (data.studioId) {
          setMyStudioId(data.studioId);
          navigate('/host-image');
        } else {
          alert('정보를 모두 기입해주세요✍️');
        }
      })
      .catch(err => console.error(err));
  };
  useEffect(() => {
    setStudioInfo({
      ...studioInfo,
      address: mainAddress + subAddress,
    });
  }, [mainAddress, subAddress]);

  return (
    <S.HostBackground>
      {isPopupOpen && (
        <PostCode
          setIsPopupOpen={setIsPopupOpen}
          setIsAddrEntered={setIsAddrEntered}
          studioInfo={studioInfo}
          setStudioInfo={setStudioInfo}
          setMainAddress={setMainAddress}
        />
      )}
      {!isPopupOpen && (
        <S.HostContainer>
          <S.Header>마음을 나눌 공간을 소개해주세요</S.Header>
          <S.Title>공간 이름</S.Title>
          <S.InputBox
            type="text"
            placeholder="호스트 할 공간의 이름을 입력해주세요"
            value={studioName}
            onChange={e => {
              setStudioInfo({ ...studioInfo, studioName: e.target.value });
            }}
          />
          <S.Title>주소</S.Title>
          <S.AddrSearch>
            <S.InputBox
              disabled
              placeholder={isAddrEntered ? mainAddress : '주소를 검색해주세요'}
            />
            <S.SearchBtn
              onClick={() => {
                setIsPopupOpen(prev => !prev);
              }}
            >
              주소 검색
            </S.SearchBtn>
          </S.AddrSearch>
          <S.InputBox
            type="text"
            placeholder="상세주소를 입력해주세요"
            onChange={e => {
              setSubAddress(e.target.value);
            }}
          />
          <S.Title>공간 유형</S.Title>
          <S.SelectCategory
            value={type}
            onChange={e => {
              setStudioInfo({
                ...studioInfo,
                type: e.target.value,
              });
            }}
          >
            {STUDIO_TYPE.map(list => {
              return (
                <S.CategoryOption key={list.id} value={list.id}>
                  {list.type}
                </S.CategoryOption>
              );
            })}
          </S.SelectCategory>
          <S.Title>카테고리</S.Title>
          <S.SelectCategory
            value={category}
            onChange={e => {
              setStudioInfo({
                ...studioInfo,
                category: e.target.value,
              });
            }}
          >
            {STUDIO_CATEGORY.map(list => {
              return (
                <S.CategoryOption key={list.id} value={list.id}>
                  {list.category}
                </S.CategoryOption>
              );
            })}
          </S.SelectCategory>
          <S.Title>가격</S.Title>
          <S.InputBox
            type="text"
            placeholder="1시간 사용료를 입력해주세요"
            value={price}
            onChange={e => {
              setStudioInfo({
                ...studioInfo,
                price: e.target.value,
              });
            }}
          />
          <S.Title>최대 인원</S.Title>
          <S.InputBox
            type="text"
            placeholder="최대 인원을 입력해주세요"
            value={maxGuests}
            onChange={e => {
              setStudioInfo({
                ...studioInfo,
                maxGuests: e.target.value,
              });
            }}
          />
          <S.SubmitBtn onClick={handleSubmitStudio}>다음</S.SubmitBtn>
        </S.HostContainer>
      )}
    </S.HostBackground>
  );
};

export default SpaceUpload;

const STUDIO_TYPE = [
  {
    id: 0,
    type: '유형을 선택해주세요:',
  },
  {
    id: 1,
    type: '집 전체',
  },
  {
    id: 2,
    type: '방',
  },
  {
    id: 3,
    type: '다인실',
  },
];

const STUDIO_CATEGORY = [
  {
    id: 0,
    category: '카테고리를 선택해주세요:',
  },
  {
    id: 1,
    category: '촬영스튜디오',
  },
  {
    id: 2,
    category: '파티룸',
  },
  {
    id: 3,
    category: '스터디룸',
  },
  {
    id: 4,
    category: '카페',
  },
  {
    id: 5,
    category: '스몰웨딩',
  },
  {
    id: 6,
    category: '공유주방',
  },
  {
    id: 7,
    category: '공유오피스',
  },
  {
    id: 8,
    category: '보컬연습실',
  },
];
