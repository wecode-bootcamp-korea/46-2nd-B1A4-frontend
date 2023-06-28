import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import OrderRevModal from '../../components/Modal/OrderRevModal';
import { nanoid } from 'nanoid';
import { PAY_METHOD, SIMPLE_PAY_METHOD, PHONE_F } from '../../uiData/orderData';
import { date, count, time, allTime } from '../../recoilState';
import * as S from './StyleOrder';

const Order = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [orderNow, setOrderNow] = useState(false);
  const [selectMethod, setSelectMethod] = useState(0);
  const [method, setMethod] = useState('');
  const [selectedDate, setSelectedDate] = useRecoilState(date);
  const [guestCount, setGuestCount] = useRecoilState(count);
  const [selectedTime, setSelectedTime] = useRecoilState(time);
  const [selectedAllTime, setSelectedAllTime] = useRecoilState(allTime);
  const [studioData, setStudioData] = useState({});
  const [userPhone, setUserPhone] = useState({});
  const [addPhone, setAddPhone] = useState(false);
  const [isPhoneUpdate, setIsPhoneUpdate] = useState(false);

  const [inputValues, setInputValues] = useState({
    phoneFir: '',
    phoneSec: '',
    phoneThr: '',
  });

  const navigate = useNavigate();

  const params = useParams();
  const studioId = params.id;

  const handleMethod = (id, method) => {
    setMethod(method);
    setSelectMethod(id);
  };

  const handleOrderBtn = () => {
    setOrderNow(prev => !prev);
    if (!orderNow) {
      handleTossApi();
    }
  };

  const handleRevUpdate = () => {
    setIsOpenModal(prev => !prev);
  };
  const handleTossApi = () => {
    const amount = studioData.studioPrice.toLocaleString().split('.');
    const bookingDate = selectedDate.toISOString().split('T');
    const timeSlot = `[${selectedTime}]`;

    fetch('https://api.tosspayments.com/v1/payments', {
      method: 'POST',
      headers: {
        Authorization:
          'Basic dGVzdF9za19CRTkyTEFhNVBWYlhOSzE3eERSODdZbXBYeUpqOg==',
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        method: method,
        amount: Number(amount[0]),
        orderId: nanoid(),
        orderName: studioData.studioName,
        successUrl: `http://localhost:3000/order/${studioId}/req_success?amount=${Number(
          amount[0]
        )}&guest=${guestCount}&timeSlot=${timeSlot}&bookingDate=${
          bookingDate[0]
        }`,
        failUrl: `http://localhost:3000/order/${studioId}/req_fail`,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.paymentKey) {
          window.location.href = result.checkout.url;
        }
      });
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_HOST}/studios/details/${studioId}`)
      .then(response => response.json())
      .then(result => {
        setStudioData(result.data);
      });
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_HOST}/users/phone`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(response => response.json())
      .then(result => {
        setUserPhone(result.data);
      });
  }, [isPhoneUpdate]);

  const handleMainLink = () => {
    navigate('/');
  };

  const ShowTime = () => {
    if (selectedAllTime.length === 0 || selectedAllTime[0] === -1) {
      return '';
    } else if (selectedAllTime.length === 1) {
      return `${selectedAllTime[0]}:00 ~ ${selectedAllTime[0] + 1}:00`;
    } else {
      return `${selectedAllTime[0]}:00 ~ ${
        selectedAllTime[selectedAllTime.length - 1]
      }:00`;
    }
  };

  const handlePhoneInput = e => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const savePhoneInput = () => {
    if (inputValues.phoneFir === null) {
      setInputValues({ ...inputValues, [inputValues.phoneFir]: '010' });
    }
    const phone =
      inputValues.phoneFir + inputValues.phoneSec + inputValues.phoneThr;

    fetch(`${process.env.REACT_APP_SERVER_HOST}/bookings/phone`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('accessToken'),
      },
      method: 'PATCH',
      body: JSON.stringify({
        userPhoneNumber: phone,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'USER_PHONE_NUMBER_UPDATE_SUCCESS') {
          alert('정상적으로 저장되었습니다 💫');
          setIsPhoneUpdate(prev => !prev);
        }
      });
  };

  if (!studioData.studioImages) return null;
  if (!userPhone) return null;

  const timeLength = selectedAllTime.length;
  const totalPrice = Number(studioData.studioPrice * timeLength);

  return (
    <S.StyleOrder>
      <S.OrderNav>
        <S.LogoImgDiv imgSrc="/images/logo_v1.png" onClick={handleMainLink} />
      </S.OrderNav>
      <S.OrderContainer>
        <S.OrderTitle>
          <S.OrderH2>확인 및 결제</S.OrderH2>
        </S.OrderTitle>
        <S.OrderWrapper>
          <S.OrderLeft>
            <S.OrderInner>
              <S.OrderDiv>
                <S.MidSpan>예약 정보</S.MidSpan>
                <S.RevTop>
                  <S.TopInnerLeft>
                    <S.SmallDiv>날짜</S.SmallDiv>
                  </S.TopInnerLeft>
                  <S.TopInnerRight>
                    <S.ThinDiv>{selectedDate.toLocaleDateString()}</S.ThinDiv>
                  </S.TopInnerRight>
                </S.RevTop>
                <S.RevTop>
                  <S.TopInnerLeft>
                    <S.SmallDiv>시간</S.SmallDiv>
                  </S.TopInnerLeft>
                  <S.TopInnerRight>
                    <S.ThinDiv>{ShowTime()}</S.ThinDiv>
                  </S.TopInnerRight>
                </S.RevTop>
                <S.RevTop>
                  <S.TopInnerLeft>
                    <S.SmallDiv>인원</S.SmallDiv>
                  </S.TopInnerLeft>
                  <S.TopInnerRight>
                    <S.ThinDiv>{guestCount}</S.ThinDiv>
                  </S.TopInnerRight>
                </S.RevTop>
                <S.RevTop>
                  <S.TopInnerLeft />
                  <S.TopInnerRight>
                    <S.UpdateBtn onClick={handleRevUpdate}>
                      예약정보 수정
                    </S.UpdateBtn>
                  </S.TopInnerRight>
                </S.RevTop>
              </S.OrderDiv>
              <S.OrderDiv>
                <S.MidSpan>결제 수단</S.MidSpan>
                <S.RevTop>
                  {PAY_METHOD.map(pay => {
                    return (
                      <S.MethodBtn
                        key={pay.id}
                        onClick={() => {
                          handleMethod(pay.id, pay.method);
                        }}
                        isActive={pay.id === selectMethod}
                      >
                        {pay.name}
                      </S.MethodBtn>
                    );
                  })}
                  {SIMPLE_PAY_METHOD.map(pay => {
                    return (
                      <S.SimpleMethodBtn
                        imgUrl={pay.imgUrl}
                        key={pay.id}
                        onClick={() => {
                          handleMethod(pay.id, pay.method);
                        }}
                        isActive={pay.id === selectMethod}
                      />
                    );
                  })}
                </S.RevTop>
              </S.OrderDiv>
              {!userPhone[0]?.phoneNumber && (
                <S.OrderDiv>
                  <S.MidSpan>필수 입력 정보</S.MidSpan>

                  <S.RevTop>
                    <S.TopInnerLeft>
                      <S.SmallDiv>전화번호</S.SmallDiv>
                      <S.ThinDiv>
                        여행 업데이트를 받으려면 전화번호를 입력하고
                        인증해주세요
                      </S.ThinDiv>
                    </S.TopInnerLeft>
                    <S.TopInnerRight>
                      {!addPhone && (
                        <S.AddBtn
                          onClick={() => {
                            setAddPhone(prev => !prev);
                          }}
                        >
                          추가
                        </S.AddBtn>
                      )}
                    </S.TopInnerRight>
                  </S.RevTop>
                  {addPhone && (
                    <S.RevTop>
                      <S.TopInnerLeft>
                        <S.PhoneSelect
                          onChange={handlePhoneInput}
                          name="phoneFir"
                        >
                          {PHONE_F.map(phone => {
                            return (
                              <option key={phone.id}>{phone.value}</option>
                            );
                          })}
                        </S.PhoneSelect>
                        -
                        <S.PhoneInput
                          maxLength="4"
                          name="phoneSec"
                          onChange={handlePhoneInput}
                        />
                        -
                        <S.PhoneInput
                          maxLength="4"
                          name="phoneThr"
                          onChange={handlePhoneInput}
                        />
                      </S.TopInnerLeft>
                      <S.TopInnerRight>
                        <S.PhoneBtn onClick={savePhoneInput}>저장</S.PhoneBtn>
                      </S.TopInnerRight>
                    </S.RevTop>
                  )}
                </S.OrderDiv>
              )}
              {userPhone[0]?.phoneNumber && (
                <S.OrderDiv>
                  <S.MidSpan>필수 입력 정보</S.MidSpan>

                  <S.RevTop>
                    <S.TopInnerLeft>
                      <S.SmallDiv>전화번호</S.SmallDiv>
                      <S.SmallDiv>
                        {userPhone[0]?.phoneNumber.substr(0, 3) +
                          '-' +
                          userPhone[0]?.phoneNumber.substr(3, 4) +
                          '-' +
                          userPhone[0]?.phoneNumber.substr(7, 4)}
                      </S.SmallDiv>
                    </S.TopInnerLeft>
                    <S.TopInnerRight>
                      <S.PhoneSaveBtn>
                        <FontAwesomeIcon icon={faCircleCheck} />
                      </S.PhoneSaveBtn>
                    </S.TopInnerRight>
                  </S.RevTop>
                </S.OrderDiv>
              )}
              <S.OrderDiv>
                <S.MidSpan>환불 정책</S.MidSpan>
                <S.RevTop>
                  <S.ThinDiv>
                    <S.BoldSpan>
                      7월 17일 전까지 무료로 취소하실 수 있습니다.
                    </S.BoldSpan>
                    체크인 날짜인 7월 22일 전에 취소하면 부분환불을 받으실 수
                    있습니다.
                    <S.MoreLink to="/"> 자세히 알아보기</S.MoreLink>
                  </S.ThinDiv>
                </S.RevTop>
              </S.OrderDiv>
              <S.OrderDiv>
                <S.MidSpan>기본 규칙</S.MidSpan>
                <S.ThinDiv>
                  <S.BoldSpan>
                    훌륭한 게스트가 되기 위한 몇가지 간단한 규칙
                  </S.BoldSpan>
                  을 지켜주실 것을 모든분들에게 당부드립니다.
                </S.ThinDiv>
                <br />
                <S.ThinDiv>
                  · 사용하신 물품은 퇴실 시 원래 자리로 배치 부탁드립니다
                </S.ThinDiv>
                <S.ThinDiv>· 스튜디오도 자신의 집처럼 아껴주세요.</S.ThinDiv>
              </S.OrderDiv>
            </S.OrderInner>
          </S.OrderLeft>
          <S.OrderRight>
            <S.OrderRightInner>
              <S.Header>
                <S.ImgDiv imgSrc={studioData.studioImages[0]} />
                <S.HeaderInner>
                  <S.H2>{studioData.studioName}</S.H2>
                  <S.DescDiv>{studioData.studioAddress}</S.DescDiv>
                  <S.SmallSpan>
                    <S.Star>
                      <FontAwesomeIcon icon={faStar} />
                    </S.Star>
                    {studioData.averageRating}
                    <S.GraySpan>(후기 {studioData.ratingCount}개)</S.GraySpan>
                  </S.SmallSpan>
                </S.HeaderInner>
              </S.Header>
              <S.OrderAmountDiv>
                <S.MidSpan>결제예정금액</S.MidSpan>
                <S.RevTop>
                  <S.TopInnerLeft>
                    <div>총 합계(KRW)</div>
                  </S.TopInnerLeft>
                  <S.TopInnerRight>
                    <div>{totalPrice.toLocaleString('en')}</div>
                  </S.TopInnerRight>
                </S.RevTop>
                <S.OrderBtn onClick={handleOrderBtn}>결제하기</S.OrderBtn>
              </S.OrderAmountDiv>
            </S.OrderRightInner>
          </S.OrderRight>
        </S.OrderWrapper>
      </S.OrderContainer>
      {isOpenModal && (
        <OrderRevModal
          isOpenModal={isOpenModal}
          handleModal={handleRevUpdate}
          studioId={studioId}
        />
      )}
    </S.StyleOrder>
  );
};

export default Order;
