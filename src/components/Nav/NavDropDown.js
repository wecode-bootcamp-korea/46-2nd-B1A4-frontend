import React, { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { DropDownContainer, LocationDropDownBox } from './StyleNavDropDown';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import Calendar from '../../pages/Detail/component/DayPicker';
import { date, count } from '../../recoilState';
import * as S from './StyleNavDropDown';

const NavDropDown = ({ name }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedDate, setSelectedDate] = useRecoilState(date);
  const [guestCount, setGuestCount] = useRecoilState(count);

  useLockBodyScroll();

  const handleCount = value => {
    if (guestCount + value === 0 || guestCount + value === 11) return;
    setGuestCount(guestCount + value);
  };

  const handleInputCount = e => {
    if (!isNaN(e.target.value)) {
      setGuestCount(Number(e.target.value));

      if (e.target.value > 10) {
        alert('최대인원은 10명 입니다.');
        setGuestCount(10);
      }
    }
  };

  const setFilterParams = (type, input) => {
    searchParams.set(type, input);
    setSearchParams(searchParams);
  };

  return (
    <>
      {name === 'location' && (
        <DropDownContainer>
          {LOCATION.map(({ id, name }) => {
            return (
              <LocationDropDownBox
                key={id}
                onClick={() => {
                  setFilterParams('studioLocation', name);
                }}
              >
                {name}
              </LocationDropDownBox>
            );
          })}
        </DropDownContainer>
      )}
      {name === 'calendar' && (
        <DropDownContainer>
          <Calendar
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </DropDownContainer>
      )}
      {name === 'guestCount' && (
        <DropDownContainer>
          <S.ModalCount>
            <S.CountBtn
              onClick={() => {
                handleCount(-1);
              }}
            >
              <S.PlusMinusIcon>-</S.PlusMinusIcon>
            </S.CountBtn>
            <S.InputBox
              value={guestCount}
              onChange={e => {
                handleInputCount(e);
              }}
            />
            <S.CountBtn
              onClick={() => {
                handleCount(1);
              }}
            >
              <S.PlusMinusIcon>+</S.PlusMinusIcon>
            </S.CountBtn>
          </S.ModalCount>
        </DropDownContainer>
      )}
    </>
  );
};

export default NavDropDown;

const LOCATION = [
  {
    id: 1,
    name: '서울',
  },
  {
    id: 2,
    name: '경기',
  },
  {
    id: 3,
    name: '대전',
  },
  {
    id: 4,
    name: '부산',
  },
  {
    id: 5,
    name: '제주',
  },
];
