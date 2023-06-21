import React, { useState } from 'react';
import { useLocation, useSearchParams, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faListUl } from '@fortawesome/free-solid-svg-icons';
import DetailFooter from './DetailFooter';
import FooterDataModal from '../Modal/FooterDataModal';
import { ETC, RIGHT_ETC } from '../uiData/footerConstData';
import * as S from './StyleFooter';

const Footer = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  const isMapOpen = searchParams.get('map_open') === 'true';

  if (
    location.pathname === '/loading' ||
    location.pathname.includes('/res_success') === true ||
    location.pathname.includes('/req_success') === true
  ) {
    return null;
  }

  if (location.pathname !== '/main') {
    return <DetailFooter />;
  }

  const handleModal = () => {
    setIsOpenModal(prev => !prev);
  };

  const handleNav = value => {
    searchParams.set('map_open', value);
    setSearchParams(searchParams);
  };

  return (
    <S.StyleFooter>
      <S.MapBtn onClick={() => handleNav(!isMapOpen)}>
        <S.MapBtnSpan>{isMapOpen ? '목록 보기' : '지도 보기'}</S.MapBtnSpan>
        <FontAwesomeIcon icon={isMapOpen ? faListUl : faMap} />
      </S.MapBtn>
      <S.FooterContainer isMapOpen={isMapOpen}>
        <S.FooterInner>
          <S.FooterWrapper>
            <S.FooterWrapperDiv>
              © 2023 Space Around, Inc
              <S.Ul>
                {ETC.map(etc => {
                  return (
                    <S.Li key={etc.id}>
                      <S.FooterLink to="/">{etc.value}</S.FooterLink>
                    </S.Li>
                  );
                })}
              </S.Ul>
            </S.FooterWrapperDiv>
            {RIGHT_ETC.map(rightEtc =>
              rightEtc.id !== '3' ? (
                <S.SlideDiv key={rightEtc.id}>
                  <span>{rightEtc.icon}</span>
                  {rightEtc.value}
                </S.SlideDiv>
              ) : (
                <S.SlideDiv key={rightEtc.id}>
                  {rightEtc.value}
                  <span onClick={handleModal}>{rightEtc.icon}</span>
                </S.SlideDiv>
              )
            )}
          </S.FooterWrapper>
        </S.FooterInner>
        <S.FooterDiv>
          웹사이트 제공자: Space Around, private unlimited company, Starting
          from 15 June 2023 | 팀 : MinJi, Kaylla, Jae Woong, Tim Oh | VAT 번호:
          IE9827384L | 사업자 등록 번호: IE 511825 | 연락처:
          spaces@spacearound.com, 웹사이트, 080-123-1235 | 호스팅 서비스
          제공업체: 스페이스 어라운드 웹서비스 | 스페이스 어라운드는 통신판매
          중개자로 스페이스 어라운드 플랫폼을 통하여 게스트와 호스트 사이에
          이루어지는 통신판매의 당사자가 아닙니다. 스페이스 어라운드 플랫폼을
          통하여 예약된 숙소, 체험, 호스트 서비스에 관한 의무와 책임은 해당
          서비스를 제공하는 호스트에게 있습니다.
        </S.FooterDiv>
        {isOpenModal && (
          <FooterDataModal
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
          />
        )}
      </S.FooterContainer>
    </S.StyleFooter>
  );
};

export default Footer;
