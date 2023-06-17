import React from 'react';
import Filter from '../Filter/Filter';
import { StyleFilterModal, ModalBox } from './StyleFilterModal';

const FilterModal = ({ isOpenModal, handleModal }) => {
  return (
    <StyleFilterModal onClick={handleModal}>
      <ModalBox isOpenModal={isOpenModal} onClick={e => e.stopPropagation()}>
        {isOpenModal && (
          <Filter isOpenModal={isOpenModal} handleModal={handleModal} />
        )}
      </ModalBox>
    </StyleFilterModal>
  );
};

export default FilterModal;
