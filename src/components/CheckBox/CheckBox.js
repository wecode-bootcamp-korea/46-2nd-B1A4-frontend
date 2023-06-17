import React from 'react';
import * as S from './StyleCheckBox';

const CheckBox = ({ handleChecked, type, checkedList }) => {
  return (
    <S.CheckboxInput
      type="checkbox"
      name={type.name}
      id={type.id}
      checked={checkedList.includes(type.name)}
      onChange={handleChecked}
    />
  );
};

export default CheckBox;
