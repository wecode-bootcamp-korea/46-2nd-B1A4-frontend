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
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_SERVER_HOST}/bookings/${searchParams.get(
        'bookingId'
      )}`,
      {
        method: 'GET',
      }
    )
      .then(response => response.json())
      .then(result => {
        console.log(result);
      });
  }, []);

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
            <S.ImgDiv imgSrc="/images/room.jpg" />
            <S.H2>연남최대 스튜디오</S.H2>
            <S.DescDiv>
              연남동
              <S.SmallSpan>
                <S.Star>
                  <FontAwesomeIcon icon={faStar} />
                </S.Star>
                4.94
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
                <S.H1>100,000원</S.H1>
              </S.TopInnerRight>
            </S.RevTop>
            <S.RevTop>
              <S.TopInnerLeft>
                <S.H1>날짜</S.H1>
              </S.TopInnerLeft>
              <S.TopInnerRight>
                <S.H1>2023.06.25</S.H1>
              </S.TopInnerRight>
            </S.RevTop>
            <S.RevTop>
              <S.TopInnerLeft>
                <S.H1>시간</S.H1>
              </S.TopInnerLeft>
              <S.TopInnerRight>
                <S.H1>15:00 ~ 16:00</S.H1>
              </S.TopInnerRight>
            </S.RevTop>
            <S.RevTop>
              <S.TopInnerLeft>
                <S.H1>인원</S.H1>
              </S.TopInnerLeft>
              <S.TopInnerRight>
                <S.H1>4명</S.H1>
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
