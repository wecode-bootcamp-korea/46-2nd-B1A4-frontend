import React from 'react';
import { useRecoilState } from 'recoil';
import { DropDownContainer, LocationDropDownBox } from './StyleNavDropDown';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import Calendar from '../../pages/Detail/component/DayPicker';
import { date, count } from '../../recoilState';
import * as S from './StyleNavDropDown';

const NavDropDown = ({ name, width, height }) => {
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
      if (guestCount > 10) {
        alert('최대인원은 10명 입니다.');
        setGuestCount(10);
      }
    }
  };

  return (
    <>
      {name === 'location' && (
        <DropDownContainer width={width} height={height}>
          {LOCATION.map(({ id, name }) => {
            return <LocationDropDownBox key={id}>{name}</LocationDropDownBox>;
          })}
        </DropDownContainer>
      )}
      {name === 'calendar' && (
        <DropDownContainer width={width} height={height}>
          <Calendar
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </DropDownContainer>
      )}
      {name === 'guestCount' && (
        <DropDownContainer width={width} height={height}>
          <S.ModalCount>
            <S.FlexBox>
              <S.CountBtn
                onClick={() => {
                  handleCount(-1);
                }}
              >
                <S.MinusIcon>-</S.MinusIcon>
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
                <S.PlusIcon>+</S.PlusIcon>
              </S.CountBtn>
            </S.FlexBox>
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
