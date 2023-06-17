import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import * as S from './StyleFooterData';
import { INFO_CATEGORY } from '../uiData/footerConstData';

const FooterData = ({ isOpenModal, setIsOpenModal }) => {
  return (
    <div>
      <S.StyleFooterDataInner>
        <div>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => {
              setIsOpenModal(prev => !prev);
            }}
          />
        </div>
        <S.StyleFooterDataWrapper>
          {INFO_CATEGORY.map(category => {
            return (
              <ul key={category.infoId}>
                <S.FooterDataH2>{category.infoValue}</S.FooterDataH2>
                {category.subInfo.map(sub => {
                  return (
                    <S.FooterDataLi
                      className="bottomMenuCategoryLi"
                      key={sub.subInfoId}
                    >
                      <S.FooterDataLink to="/">
                        {sub.subInfoValue}
                      </S.FooterDataLink>
                    </S.FooterDataLi>
                  );
                })}
              </ul>
            );
          })}
        </S.StyleFooterDataWrapper>
      </S.StyleFooterDataInner>
    </div>
  );
};

export default FooterData;
