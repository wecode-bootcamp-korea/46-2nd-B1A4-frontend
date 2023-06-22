import React from 'react';
import { StyleReviewModal, ModalBox } from './StyleReviewModal';
import MoreReview from '../Review/MoreReview';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';

const ReviewModal = ({ isOpenModal, handleModal, focusId }) => {
  useLockBodyScroll();
  return (
    <StyleReviewModal onClick={handleModal}>
      <ModalBox isOpenModal={isOpenModal} onClick={e => e.stopPropagation()}>
        {isOpenModal && (
          <MoreReview
            isOpenModal={isOpenModal}
            handleModal={handleModal}
            focusId={focusId}
          />
        )}
      </ModalBox>
    </StyleReviewModal>
  );
};

export default ReviewModal;
