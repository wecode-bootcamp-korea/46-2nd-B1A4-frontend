import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faRotateLeft,
  faHouseCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import * as S from './StyleResSuccess';

export default function ResSuccess() {
  const [searchParams] = useSearchParams();
  const [resSuccess, setResSuccess] = useState([]);
  const navigate = useNavigate();

  const handleMainLink = () => {
    navigate('/main');
  };

  const ShowTime = () => {
    const timeSlot = resSuccess.timeSlot;
    if (!timeSlot) {
      return '';
    } else if (timeSlot[1] === null) {
      return `${timeSlot[0]}:00 ~ ${timeSlot[0] + 1}:00`;
    } else {
      return `${timeSlot[0]}:00 ~ ${timeSlot[1] + 1}:00`;
    }
  };

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_SERVER_HOST}/bookings/${searchParams.get(
        'bookingId'
      )}`,
      {
        method: 'GET',
        headers: {
          Authorization: localStorage.getItem('accessToken'),
        },
      }
    )
      .then(response => response.json())
      .then(result => {
        setResSuccess(result.data[0]);
      });
  }, []);

  if (!resSuccess) return null;
  if (!resSuccess.studioImages) return null;
  const bookingDate = resSuccess.bookingDate.substring(0, 10);
  const totalPrice = Number(resSuccess.totalPrice).toLocaleString('en');
  return (
    <div>
      <S.OrderNav>
        <S.LogoImgDiv imgSrc="/images/logo_v1.png" onClick={handleMainLink} />
      </S.OrderNav>
      <S.StyleResSuc>
        <S.Title>
          <S.IconCheck>
            <FontAwesomeIcon icon={faHouseCircleCheck} />
          </S.IconCheck>
          결제가 정상적으로 처리되었습니다.
        </S.Title>
        <S.Container>
          <S.ContainerLeftInner>
            <S.ImgDiv imgSrc={resSuccess.studioImages[0]} />
            <S.H2>{resSuccess.studioName}</S.H2>
            <S.DescDiv>
              {resSuccess.studioAddress}
              <S.SmallSpan>
                <S.Star>
                  <FontAwesomeIcon icon={faStar} />
                </S.Star>
                {resSuccess.averageRating}
              </S.SmallSpan>
            </S.DescDiv>
          </S.ContainerLeftInner>
          <S.ContainerRightInner>
            <S.RightTitle>예약/결제 정보</S.RightTitle>
            <S.RevTop>
              <S.TopInnerLeft>
                <S.H1>주문번호</S.H1>
              </S.TopInnerLeft>
              <S.TopInnerRight>
                <S.OrderNum>{searchParams.get('bookingId')}</S.OrderNum>
              </S.TopInnerRight>
            </S.RevTop>
            <S.RevTop>
              <S.TopInnerLeft>
                <S.H1>총 결제금액</S.H1>
              </S.TopInnerLeft>
              <S.TopInnerRight>
                <S.H1>{totalPrice}원</S.H1>
              </S.TopInnerRight>
            </S.RevTop>
            <S.RevTop>
              <S.TopInnerLeft>
                <S.H1>날짜</S.H1>
              </S.TopInnerLeft>
              <S.TopInnerRight>
                <S.H1>{bookingDate}</S.H1>
              </S.TopInnerRight>
            </S.RevTop>
            <S.RevTop>
              <S.TopInnerLeft>
                <S.H1>시간</S.H1>
              </S.TopInnerLeft>
              <S.TopInnerRight>
                <S.H1>{ShowTime()}</S.H1>
              </S.TopInnerRight>
            </S.RevTop>
            <S.RevTop>
              <S.TopInnerLeft>
                <S.H1>인원</S.H1>
              </S.TopInnerLeft>
              <S.TopInnerRight>
                <S.H1>{resSuccess.totalGuest}명</S.H1>
              </S.TopInnerRight>
            </S.RevTop>
            <S.MainBtn onClick={handleMainLink}>
              <S.Rotate>
                <FontAwesomeIcon icon={faRotateLeft} />
              </S.Rotate>
              메인으로 돌아가기
            </S.MainBtn>
          </S.ContainerRightInner>
        </S.Container>
      </S.StyleResSuc>
    </div>
  );
}
