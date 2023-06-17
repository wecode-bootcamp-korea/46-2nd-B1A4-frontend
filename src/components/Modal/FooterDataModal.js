import React from 'react';
import FooterData from '../Footer/FooterData';
import { moveUp, moveDown } from '../Footer/ShowEffect';
import { StyleFooterDataModal, ModalBox } from './StyleFooterDataModal';

const FooterDataModal = ({ isOpenModal, setIsOpenModal }) => {
  return (
    <StyleFooterDataModal
      onClick={() => {
        setIsOpenModal(prev => !prev);
      }}
    >
      <ModalBox
        isOpenModal={isOpenModal}
        moveUp={moveUp}
        moveDown={moveDown}
        onClick={e => e.stopPropagation()}
      >
        {isOpenModal && (
          <FooterData
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
          />
        )}
      </ModalBox>
    </StyleFooterDataModal>
  );
};

export default FooterDataModal;
