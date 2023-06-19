import React, { useEffect, useState } from 'react';
import * as S from './StyleDetail';
import Calendar from './component/DayPicker';
import TimePicker from './component/TimePicker';
import Map from './component/Map';

const Detail = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalShow, setIsModalShow] = useState(false);
  const [isCountModalShow, setIsCountModalShow] = useState(false);
  const [detailData, setDetailData] = useState({});
  const [time, setTime] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('/data/detailData.json')
      .then(res => res.json())
      .then(detailData => setDetailData(detailData.description[0]));
  }, []);

  const handleModalBtn = () => {
    setIsModalShow(prev => !prev);
  };

  const handleCountModal = () => {
    setIsCountModalShow(prev => !prev);
  };

  const ShowTime = () => {
    if (time.length === 0) {
      return '시간선택';
    } else if (time[1] === null) {
      return `${time[0]}:00 ~ ${time[0] + 1}:00`;
    } else {
      return `${time[0]}:00 ~ ${time[1] + 1}:00`;
    }
  };

  const PostTime = () => {
    if (time[1] === null) {
      console.log([time[0], time[0] + 1]);
    } else {
      console.log([time[0], time[1] + 1]);
    }
  };

  const handleCount = value => {
    if (count + value === 0 || count + value === 11) return;
    setCount(count + value);
  };

  const handleInputCount = e => {
    if (!isNaN(e.target.value)) {
      setCount(Number(e.target.value));
      if (count > 10) {
        alert('최대인원은 10명 입니다.');
        setCount(10);
      }
    }
  };

  if (!detailData.studio_images) return null;
  return (
    <>
      <S.Container>
        <S.Main>
          <S.Title>{detailData.studio_name}</S.Title>
          <S.Ptag>{detailData.address}</S.Ptag>
          <S.ImgBox>
            <S.MainImg src={detailData.studio_images[4]} />
            <S.SubImgBox>
              <S.SubImg src={detailData.studio_images[1]} />
              <S.BorderTopImg src={detailData.studio_images[2]} />
              <S.SubImg src={detailData.studio_images[3]} />
              <S.BorderBottomImg src={detailData.studio_images[0]} />
            </S.SubImgBox>
          </S.ImgBox>
        </S.Main>
        <S.DescriptionContainer>
          <S.DescriptionBox>
            <S.ProfileBox>
              <div>
                <S.Title>
                  {detailData.host_name} 님이 호스팅하는{' '}
                  {detailData.studio_name}
                </S.Title>
                <S.Ptag>최대 인원 {detailData.max_guests}명</S.Ptag>
              </div>
              <S.ProfileImg src={detailData.profile_image} />
            </S.ProfileBox>
            <S.Infor>
              {detailData.description.map(content => {
                return <S.Ptag key={content.id}>{content}</S.Ptag>;
              })}
            </S.Infor>
            <S.Title>편의시설</S.Title>
            {detailData.amenities.map(amenitiesData => {
              return (
                <S.Notification key={amenitiesData.id}>
                  <S.IconImg src={amenitiesData.icon_img} />
                  <div>
                    <S.Ptag>{amenitiesData.title}</S.Ptag>
                    <S.Ptag>{amenitiesData.content}</S.Ptag>
                  </div>
                </S.Notification>
              );
            })}
            <S.BorderTop />
            <div>
              <S.Title>예약 날짜를 선택하세요</S.Title>
              <Calendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            </div>
          </S.DescriptionBox>
          <S.PriceBox>
            <S.SubTitle>
              ₩{Number(detailData.price_per_hour).toLocaleString('en')}/시간
            </S.SubTitle>
            <S.SubTitle>요금을 확인하려면 날짜와 시간을 입력하세요.</S.SubTitle>
            <S.CheckBox>
              <S.CheckDate>
                <S.CheckText>체크인</S.CheckText>
                <S.CheckText>{selectedDate.toLocaleDateString()}</S.CheckText>
              </S.CheckDate>
              <S.CheckTime>
                <S.CheckText>시간</S.CheckText>
                <S.Button onClick={handleModalBtn}>{ShowTime()}</S.Button>
              </S.CheckTime>
              <S.CheckNum>
                <S.CheckText>인원</S.CheckText>
                <S.Button onClick={handleCountModal}>
                  총 예약인원{count === 0 ? null : `: ${count}명`}
                  {isCountModalShow ? <S.Arrow /> : <S.ArrowUp />}
                </S.Button>
                {isCountModalShow && (
                  <S.ModalCount>
                    <S.FlexBox>
                      <S.CountBtn
                        onClick={() => {
                          handleCount(-1);
                        }}
                      >
                        <S.MinusIcon />
                      </S.CountBtn>
                      <S.InputBox
                        value={count}
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
                    </S.FlexBox>
                  </S.ModalCount>
                )}
              </S.CheckNum>
            </S.CheckBox>
            <S.ModalBtn
              onClick={() => {
                time.length === 0 && alert('시간을 선택해주세요');
                count === 0 && alert('인원을 선택해주세요.');
                PostTime();
              }}
            >
              예약하기
            </S.ModalBtn>
          </S.PriceBox>
        </S.DescriptionContainer>
        <S.MapContainer>
          <S.Title>호스팅 지역</S.Title>
          <Map
            latitude={detailData.location_latitude}
            longitude={detailData.location_longitude}
          />
        </S.MapContainer>
        <S.PrecautionsContainer>
          <S.Title>예약시 주의사항</S.Title>
          <S.BorderColor />
          {detailData.rules.map(data => {
            return <S.Text key={data.id}>{data}</S.Text>;
          })}
        </S.PrecautionsContainer>
        <S.PrecautionsContainer>
          <S.Title>환불규정 안내</S.Title>
          <S.BorderColor />
          <S.WarningText>
            이용당일(첫 날) 이후에 환불 관련 사항은 호스트에게 직접 문의하셔야
            합니다.
          </S.WarningText>
          <S.Text>
            결제 후 2시간 이내에는 100% 환불이 가능합니다.(단, 이용시간 전까지만
            가능)
          </S.Text>
          {NOTIFICATION.map(data => {
            return (
              <S.Notification key={data.id}>
                <S.DateText>{data.date}</S.DateText>
                <S.Text>{data.refund}</S.Text>
              </S.Notification>
            );
          })}
        </S.PrecautionsContainer>
        <S.ExampleBox />
      </S.Container>
      {isModalShow && (
        <S.Modal>
          <S.ModalTime>
            <S.FlexBox>
              <S.ModalTitle>시간을 선택해주세요</S.ModalTitle>
              <S.CloseIcon
                onClick={() => {
                  setIsModalShow(false);
                }}
              />
            </S.FlexBox>

            <TimePicker
              setTime={setTime}
              bookingNum={detailData.booking_number}
            />
            <S.ModalBtn
              onClick={() => {
                setIsModalShow(false);
              }}
            >
              선택 완료
            </S.ModalBtn>
          </S.ModalTime>
        </S.Modal>
      )}
    </>
  );
};

export default Detail;

const NOTIFICATION = [
  { id: 1, date: '이용 7일전', refund: '총 금액의 100% 환불' },
  { id: 2, date: '이용 6일전', refund: '환불불가' },
  { id: 3, date: '이용 5일전', refund: '환불불가' },
  { id: 4, date: '이용 4일전', refund: '환불불가' },
  { id: 5, date: '이용 3일전', refund: '환불불가' },
  { id: 6, date: '이용 2일전', refund: '환불불가' },
  { id: 7, date: '이용 1일전', refund: '환불불가' },
];
