import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Calendar from '../Detail/component/DayPicker';
import TimePicker from '../Detail/component/TimePicker';
import { useRecoilState } from 'recoil';
import { date, count, time, allTime, bookingNumber } from '../../recoilState';

import * as S from './StyleRevUpdate';

const RevUpdate = ({ isOpenModal, handleModal }) => {
  const [selectedDate, setSelectedDate] = useRecoilState(date);
  const [guestCount, setGuestCount] = useRecoilState(count);
  const [selectedAllTime, setSelectedAllTime] = useRecoilState(allTime);
  const [selectedTime, setSelectedTime] = useRecoilState(time);
  const [detailsData, setDetailsData] = useState({});
  const bookedArray = useRecoilState(bookingNumber);
  const navigate = useNavigate();

  const ShowTime = () => {
    if (selectedAllTime.length === 0) {
      return '시간선택';
    } else if (selectedTime[1] === null) {
      return `${selectedTime[0]}:00 ~ ${selectedTime[0] + 1}:00`;
    } else {
      return `${selectedTime[0]}:00 ~ ${selectedTime[1] + 1}:00`;
    }
  };

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

  const getAllTime = () => {
    const start = selectedTime[0];
    const end = selectedTime[1];
    const newArr = [];

    if (end === null) {
      newArr.push(start, start + 1);
    } else {
      for (let i = start; i <= end + 1; i++) {
        newArr.push(i);
      }
    }
    setSelectedAllTime(newArr);
  };

  const preventOrder = () => {
    if (selectedDate.length === 0 || guestCount === 0) {
      alert('시간 또는 인원을 선택해주세요');
      return null;
    } else {
      getAllTime();
      navigate('/order');
    }
  };

  useEffect(() => {
    fetch('/data/detailData.json')
      .then(res => res.json())
      .then(data => {
        setDetailsData(data.data);
      });
  }, []);

  return (
    <S.StyleRevOrder>
      <S.Header>
        <S.HeaderDiv>
          <div>
            <S.CloseBtn>
              <FontAwesomeIcon icon={faXmark} onClick={handleModal} />
            </S.CloseBtn>
          </div>
          <div>
            <S.BoldSpan>예약정보</S.BoldSpan>
          </div>
          <div />
        </S.HeaderDiv>
      </S.Header>
      <S.Container>
        <S.ContainerLeft>
          <div>
            <S.TitleSpan>예약 날짜</S.TitleSpan>
            <S.CalendarDiv>
              <Calendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            </S.CalendarDiv>
          </div>
          <div>
            <S.TimePickerDiv>
              <S.FlexBox>
                <S.TitleSpan>예약 시간 {ShowTime()}</S.TitleSpan>
              </S.FlexBox>
              <TimePicker
                setTime={setSelectedTime}
                bookingNum={bookedArray[0]}
              />
            </S.TimePickerDiv>
          </div>
        </S.ContainerLeft>
        <S.ContainerRight>
          <S.TitleSpan>인원</S.TitleSpan>
          <S.Exp>
            이 스튜디오의 최대사용 인원은 10명입니다. 반려동물 동반은
            허용되지않습니다.
            <br />
          </S.Exp>
          <S.Content>
            <S.CountDiv>
              <S.CountBtn
                onClick={() => {
                  handleCount(-1);
                }}
              >
                <S.MinusIcon />
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
                <S.PlusIcon />
              </S.CountBtn>
            </S.CountDiv>
          </S.Content>
        </S.ContainerRight>
      </S.Container>
      <S.Footer>
        <S.FooterDiv>
          <div>
            <S.AllCancelSpan onClick={handleModal}>취소</S.AllCancelSpan>
          </div>
          <S.BlackBtn onClick={preventOrder}>저장하기</S.BlackBtn>
        </S.FooterDiv>
      </S.Footer>
    </S.StyleRevOrder>
  );
};

export default RevUpdate;
