import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  faCameraRetro,
  faChampagneGlasses,
  faBook,
  faMugSaucer,
  faCakeCandles,
  faCookieBite,
  faBuilding,
  faMicrophoneLines,
  faSliders,
} from '@fortawesome/free-solid-svg-icons';
import {
  LocalNavContainer,
  LocalNavWrapper,
  LocalNavBox,
  CategoryIcon,
  CategoryName,
  FilterButton,
  FilterIcon,
  FilterText,
} from './StyleLocalNav';
import Filter from '../Filter/Filter';

const LocalNav = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleModal = () => {
    setIsOpenModal(false);
  };

  const setCategoryParams = id => {
    searchParams.set('studioCategoryId', id);
    searchParams.set('limit', '9');
    setSearchParams(searchParams);
  };

  return (
    <>
      <LocalNavContainer>
        <LocalNavWrapper>
          {CATEGORY.map(({ id, icon, name }) => {
            return (
              <LocalNavBox
                key={id}
                onClick={() => {
                  setCategoryParams(id);
                }}
              >
                <CategoryIcon icon={icon} />
                <CategoryName>{name}</CategoryName>
              </LocalNavBox>
            );
          })}
        </LocalNavWrapper>
        <FilterButton
          onClick={() => {
            setIsOpenModal(prev => !prev);
          }}
        >
          <FilterIcon icon={faSliders} />
          <FilterText>필터</FilterText>
        </FilterButton>
      </LocalNavContainer>
      {isOpenModal && (
        <Filter isOpenModal={isOpenModal} handleModal={handleModal} />
      )}
    </>
  );
};

export default LocalNav;

const CATEGORY = [
  {
    id: 1,
    icon: faCameraRetro,
    name: '촬영스튜디오',
  },
  {
    id: 2,
    icon: faCakeCandles,
    name: '파티룸',
  },
  {
    id: 3,
    icon: faBook,
    name: '스터디룸',
  },
  {
    id: 4,
    icon: faMugSaucer,
    name: '카페',
  },
  {
    id: 5,
    icon: faChampagneGlasses,
    name: '스몰웨딩',
  },
  {
    id: 6,
    icon: faCookieBite,
    name: '공유주방',
  },
  {
    id: 7,
    icon: faBuilding,
    name: '공유오피스',
  },
  {
    id: 8,
    icon: faMicrophoneLines,
    name: '보컬연습실',
  },
];
