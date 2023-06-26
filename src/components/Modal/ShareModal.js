import React from 'react';
import { useLocation } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import { StyleReviewModal, ModalBox } from './StyleReviewModal';
import * as S from './StyleShareModal';

const ShareModal = ({
  isOpenModal,
  handleModal,
  setIsShareModalShow,
  data,
}) => {
  useLockBodyScroll();

  const location = useLocation();

  return (
    <StyleReviewModal onClick={handleModal}>
      <ModalBox isOpenModal={isOpenModal} onClick={e => e.stopPropagation()}>
        <S.Container
          onClick={() => {
            setIsShareModalShow(false);
          }}
        >
          <S.Close />
          <S.Title>숙소 공유하기</S.Title>
          <S.Flex>
            <S.Img src={data.studioImages[0]} />
            <S.Ptag>{data.studioName}•</S.Ptag>
            <S.Ptag>{data.studioAddress}•</S.Ptag>
            <S.Ptag>
              <S.Star />
              {data.averageRating}
            </S.Ptag>
          </S.Flex>
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
            <S.LinkBox>
              <S.Mail />
              <S.Ptag>이메일</S.Ptag>
            </S.LinkBox>
            <S.LinkBox>
              <S.Message />
              <S.Ptag>메시지</S.Ptag>
            </S.LinkBox>
            <S.LinkBox>
              <S.Kakao />
              <S.Ptag>카카오톡</S.Ptag>
            </S.LinkBox>
          </S.Flex>
        </S.Container>
      </ModalBox>
    </StyleReviewModal>
  );
};

export default ShareModal;
