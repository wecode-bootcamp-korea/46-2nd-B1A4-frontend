import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { StyleReviewModal } from './StyleReviewModal';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import EmailModal from './EmailModal';
import * as S from './StyleShareModal';

const ShareModal = ({
  isOpenModal,
  handleModal,
  setIsShareModalShow,
  data,
}) => {
  useLockBodyScroll();

  const location = useLocation();
  const [isMailModalShow, setIsMailModalShow] = useState(false);

  const handleMailModal = () => {
    setIsMailModalShow(prev => !prev);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const shareKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init('fde98289a42404a2aef1b9d89dc11a3b');
      }

      kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: data.studioName,
          description: 'Space Around로 초대합니다',
          imageUrl: data.studioImages[0],
          link: {
            mobileWebUrl: `localhost:3000${location.pathname}`,
            webUrl: `localhost:3000${location.pathname}`,
          },
        },
      });
    }
  };

  return (
    <>
      <StyleReviewModal onClick={handleModal}>
        <S.Modal isOpenModal={isOpenModal} onClick={e => e.stopPropagation()}>
          <S.Container>
            <S.Close
              onClick={() => {
                setIsShareModalShow(false);
              }}
            />
            <S.Title>숙소 공유하기</S.Title>
            <S.Wrapper>
              <S.Box>
                <S.Flex>
                  <S.Img src={data.studioImages[0]} />
                  <S.Ptag>{data.studioName}•</S.Ptag>
                  <S.Ptag>{data.studioAddress}•</S.Ptag>
                  <S.Ptag>
                    <S.Star />
                    {data.averageRating}
                  </S.Ptag>
                </S.Flex>
              </S.Box>
              <S.Box>
                <S.Flex>
                  <CopyToClipboard
                    text={`localhost:3000${location.pathname}`}
                    onCopy={() => alert('주소가 복사되었습니다')}
                  >
                    <S.LinkBox>
                      <S.Copy />
                      <S.Ptag>링크복사</S.Ptag>
                    </S.LinkBox>
                  </CopyToClipboard>
                  <S.LinkBox onClick={handleMailModal}>
                    <S.Mail />
                    <S.Ptag>이메일</S.Ptag>
                  </S.LinkBox>
                  <S.LinkBox>
                    <S.Message />
                    <S.Ptag>메시지</S.Ptag>
                  </S.LinkBox>
                  <S.LinkBox onClick={shareKakao}>
                    <S.Kakao />
                    <S.Ptag>카카오톡</S.Ptag>
                  </S.LinkBox>
                </S.Flex>
              </S.Box>
            </S.Wrapper>
          </S.Container>
        </S.Modal>
      </StyleReviewModal>
      {isMailModalShow && (
        <EmailModal setIsMailModalShow={setIsMailModalShow} />
      )}
    </>
  );
};

export default ShareModal;
