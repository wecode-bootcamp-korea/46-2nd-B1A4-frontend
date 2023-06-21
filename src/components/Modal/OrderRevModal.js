import React from 'react';
import { StyleOrderRevModal, ModalBox } from './StyleOrderRevModal';
import RevUpdate from '../../pages/Order/RevUpdate';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';

const OrderRevModal = ({ isOpenModal, handleModal }) => {
  useLockBodyScroll();

  return (
    <StyleOrderRevModal onClick={handleModal}>
      <ModalBox isOpenModal={isOpenModal} onClick={e => e.stopPropagation()}>
        {isOpenModal && (
          <RevUpdate isOpenModal={isOpenModal} handleModal={handleModal} />
        )}
      </ModalBox>
    </StyleOrderRevModal>
  );
};

export default OrderRevModal;
