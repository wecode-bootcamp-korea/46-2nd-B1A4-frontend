import React, { useEffect, useState, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate, useParams } from 'react-router-dom';
import Calendar from './component/DayPicker';
import TimePicker from './component/TimePicker';
import Map from './component/Map';
import Review from '../../components/Review/Review';
import ShareModal from '../../components/Modal/ShareModal';
import useOnClickOutside from '../../hooks/useOutsideClick';
import { date, count, time, allTime, bookingNumber } from '../../recoilState';
import * as S from './StyleDetail';

const Detail = () => {
  const [selectedDate, setSelectedDate] = useRecoilState(date);
  const [guestCount, setGuestCount] = useRecoilState(count);
  const [selectedTime, setSelectedTime] = useRecoilState(time);
  const [selectedAllTime, setSelectedAllTime] = useRecoilState(allTime);
  const [isModalShow, setIsModalShow] = useState(false);
  const [isCountModalShow, setIsCountModalShow] = useState(false);
  const [detailsData, setDetailsData] = useState({});
  const [isWishClick, setIsWishClick] = useState(false);
  const [isShareModalShow, setIsShareModalShow] = useState(false);
  const [focusId, setFocusId] = useState(0);
  const [bookingTime, setBookingTime] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const inputForm = useRef();
  const [bookingArray, setBookingArray] = useRecoilState(bookingNumber);
  const countRef = useRef();
  const timeRef = useRef();
  const scrollDateRef = useRef(null);
  const scrollMapRef = useRef(null);

  const {
    hostName,
    profileImage,
    studioName,
    studioPrice,
    maxGuests,
    studioAddress,
    studioDescription,
    studioRules,
    locationLatitude,
    locationLongitude,
    amenities,
    studioImages,
    ratingCount,
    averageRating,
    liked,
    studioId,
  } = detailsData;

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_HOST}/studios/details/${id}`)
      .then(res => res.json())
      .then(data => {
        setDetailsData(data.data);
      });
  }, [isWishClick]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_HOST}/bookings/time/${id}`)
      .then(res => res.json())
      .then(data => {
        setBookingTime(data.data);
        setBookingArray(
          data.data.map(time => {
            return time.timeSlotId;
          })
        );
      });
  }, []);

  const handleModalBtn = () => {
    setIsModalShow(prev => !prev);
  };

  const handleCountModal = () => {
    setIsCountModalShow(prev => !prev);
  };

  const ShowTime = () => {
    if (selectedTime.length === 0 || selectedTime[0] === -1) {
      return '시간선택';
    } else if (selectedTime[1] === null) {
      return `${selectedTime[0]}:00 ~ ${selectedTime[0] + 1}:00`;
    } else {
      return `${selectedTime[0]}:00 ~ ${selectedTime[1] + 1}:00`;
    }
  };

  const handleCount = value => {
    if (guestCount + value === 0 || guestCount + value === maxGuests + 1)
      return;
    setGuestCount(guestCount + value);
  };

  const handleInputCount = e => {
    if (!isNaN(e.target.value)) {
      setGuestCount(Number(e.target.value));
      if (guestCount > maxGuests) {
        alert(`최대인원은 ${maxGuests}명 입니다.`);
        setGuestCount(maxGuests);
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
      navigate(`/order/${id}`);
    }
  };

  const handleWishBtn = () => {
    let currentLike = liked;

    if (currentLike === 1) {
      currentLike = 0;
    } else {
      currentLike = 1;
    }

    fetch(`${process.env.REACT_APP_SERVER_HOST}/users/like`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: localStorage.getItem('accessToken'),
      },
      body: JSON.stringify({
        studioId: studioId,
        liked: currentLike,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'USER_LIKE_CHANGE_SUCCESS') {
          setIsWishClick(prev => !prev);
        }
      });
  };

  const handleShare = focusId => {
    setIsShareModalShow(prev => !prev);
    if (focusId) {
      setFocusId(focusId);
    }
  };

  useOnClickOutside(countRef, () => setIsCountModalShow(false));

  useOnClickOutside(timeRef, () => setIsModalShow(false));

  const handleDateClick = () => {
    if (scrollDateRef.current) {
      scrollDateRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMapClick = () => {
    if (scrollMapRef.current) {
      scrollMapRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!studioImages) return null;
  return (
    <>
      <S.Container>
        <S.Main>
          <S.Title>{studioName}</S.Title>
          <S.FlexBox>
            <S.Flex>
              <S.Ptag>
                <S.Star />
                {averageRating}
              </S.Ptag>
              <S.TitleInfor>
                {ratingCount > 0 ? `후기 ${ratingCount}개` : '후기없음'}
              </S.TitleInfor>
              <S.TitleInfor onClick={handleMapClick}>
                {studioAddress}
              </S.TitleInfor>
            </S.Flex>
            <S.Flex>
              <S.Share />
              <S.TitleInfor onClick={handleShare}>공유하기</S.TitleInfor>
              {liked === 1 ? <S.FillHeart /> : <S.BlankHeart />}
              <S.TitleInfor onClick={handleWishBtn}>저장</S.TitleInfor>
            </S.Flex>
          </S.FlexBox>
          <S.ImgBox>
            <S.MainImg src={studioImages[0]} />
            <S.SubImgBox>
              <S.SubImg src={studioImages[1]} />
              <S.BorderTopImg src={studioImages[2]} />
              <S.SubImg src={studioImages[3]} />
              <S.BorderBottomImg src={studioImages[4]} />
            </S.SubImgBox>
          </S.ImgBox>
        </S.Main>
        <S.DescriptionContainer>
          <S.DescriptionBox>
            <S.ProfileBox>
              <div>
                <S.Title>
                  {hostName} 님이 호스팅하는 {studioName}
                </S.Title>
                <S.Ptag>최대 인원 {maxGuests}명</S.Ptag>
              </div>
              <S.ProfileImg src={profileImage} />
            </S.ProfileBox>
            <S.Infor>
              {studioDescription.split('\n').map(content => {
                return <S.Ptag key={content.id}>{`- ${content}`}</S.Ptag>;
              })}
            </S.Infor>
            {amenities && (
              <div>
                <S.Title>편의시설</S.Title>
                {amenities?.map(amenitiesData => {
                  return (
                    <S.Notification key={amenitiesData.id}>
                      <S.IconImg src={amenitiesData.imgIcon} />
                      <div>
                        <S.Ptag>{amenitiesData.title}</S.Ptag>
                        <S.Ptag>{amenitiesData.content}</S.Ptag>
                      </div>
                    </S.Notification>
                  );
                })}
              </div>
            )}
            {amenities && <S.BorderTop />}
            <div ref={scrollDateRef}>
              <S.Title>예약 날짜를 선택하세요</S.Title>
              <Calendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            </div>
          </S.DescriptionBox>
          <S.PriceBox>
            <S.SubTitle>
              ₩{Number(studioPrice).toLocaleString('en')}/시간
            </S.SubTitle>
            <S.SubTitle>요금을 확인하려면 날짜와 시간을 입력하세요.</S.SubTitle>
            <S.CheckBox>
              <S.CheckDate onClick={handleDateClick}>
                <S.CheckText>체크인</S.CheckText>
                <S.CheckText>
                  {selectedDate
                    .toLocaleDateString()
                    .replace(/\./g, '')
                    .replace(/\s/g, '-')}
                </S.CheckText>
              </S.CheckDate>
              <S.CheckTime>
                <S.CheckText>시간</S.CheckText>
                <S.Button onClick={handleModalBtn}>{ShowTime()}</S.Button>
              </S.CheckTime>
              <S.CheckNum>
                <S.CheckText>인원</S.CheckText>
                <S.Button onClick={handleCountModal}>
                  총 예약인원{guestCount === 0 ? null : `: ${guestCount}명`}
                  {isCountModalShow ? <S.Arrow /> : <S.ArrowUp />}
                </S.Button>
                {isCountModalShow && (
                  <S.ModalCount ref={countRef}>
                    <S.FlexBox>
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
                    </S.FlexBox>
                  </S.ModalCount>
                )}
              </S.CheckNum>
            </S.CheckBox>
            <S.ModalBtn
              onClick={() => {
                preventOrder();
              }}
            >
              예약하기
            </S.ModalBtn>
          </S.PriceBox>
        </S.DescriptionContainer>
        <S.DescriptionContainer>
          <Review ref={inputForm} />
        </S.DescriptionContainer>
        <S.MapContainer ref={scrollMapRef}>
          <S.Title>호스팅 지역</S.Title>
          <Map latitude={locationLatitude} longitude={locationLongitude} />
        </S.MapContainer>
        <S.PrecautionsContainer>
          <S.Title>예약시 주의사항</S.Title>
          <S.BorderColor />
          {studioRules.split('\n').map(data => {
            return <S.Text key={data.id}>{`- ${data}`}</S.Text>;
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
      </S.Container>
      {isModalShow && (
        <S.Modal>
          <S.ModalTime ref={timeRef}>
            <S.FlexBox>
              <S.ModalTitle>시간을 선택해주세요</S.ModalTitle>
              <S.CloseIcon
                onClick={() => {
                  setIsModalShow(false);
                }}
              />
            </S.FlexBox>

            <TimePicker setTime={setSelectedTime} bookingNum={bookingArray} />
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
      {isShareModalShow && (
        <ShareModal
          isOpenModal={isShareModalShow}
          handleModal={handleShare}
          setIsShareModalShow={setIsShareModalShow}
          data={detailsData}
        />
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
