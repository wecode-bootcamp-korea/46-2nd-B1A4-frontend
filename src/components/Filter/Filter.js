import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faMinus } from '@fortawesome/free-solid-svg-icons';
import RangeSlider from '../RangeSlider/RangeSlider';
import { ROOM_PROVIDE, ROOM_TYPE } from '../../uiData/roomData';
import * as S from './StyleFilter';
import CheckBox from '../CheckBox/CheckBox';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';

const Filter = ({ isOpenModal, handleModal }) => {
  const [isAdd, setIsAdd] = useState(6);
  const [studioDataList, setStudioDataList] = useState([]);
  const [payRange, setPayRange] = useState([10000, 40000]);
  const [checkedList, setCheckedList] = useState([]);

  const handleRange = (event, index) => {
    const { value } = event.target;
    const newArray = [...payRange];
    newArray[index] = value;
    setPayRange(newArray);
  };

  const handleChecked = e => {
    const { checked, name } = e.target;
    if (checked) {
      setCheckedList(prev => [...prev, name]);
    } else {
      setCheckedList(prev => prev.filter(item => item !== name));
    }
  };

  const handleCheckCancel = () => {
    setCheckedList([]);
  };

  const handleProvide = () => {
    isAdd === 6 ? setIsAdd(12) : setIsAdd(6);
  };
  useEffect(() => {
    fetch('data/filterData.json')
      .then(response => response.json())
      .then(result => {
        setStudioDataList(result.data);
      });
  }, []);

  useLockBodyScroll();

  return (
    <S.StyleFilter>
      <S.Header>
        <S.HeaderDiv>
          <div>
            <S.CloseBtn>
              <FontAwesomeIcon icon={faXmark} onClick={handleModal} />
            </S.CloseBtn>
          </div>
          <div>
            <S.BoldSpan>필터</S.BoldSpan>
          </div>
          <div />
        </S.HeaderDiv>
      </S.Header>
      <S.Body>
        <S.BodyDiv>
          <S.H2>가격 범위</S.H2>
          <S.GraySpan>평균 1박 요금은 ₩152,631입니다.</S.GraySpan>
          <S.BodyContainer>
            <S.RangeBox>
              <S.RangeBoxInner>
                {studioDataList.map(studios => {
                  return studios.studios.map(st => (
                    <S.RangeDiv
                      key={st.studios_id}
                      price={Number(st.price_per_hour) * 0.001}
                    />
                  ));
                })}
              </S.RangeBoxInner>
            </S.RangeBox>
            <S.Slider>
              <RangeSlider payRange={payRange} setPayRange={setPayRange} />
            </S.Slider>
            <S.BodyInner>
              <S.BodyWrapper>
                <S.GraySmallSpan>최저 요금</S.GraySmallSpan>
                <S.BodyWrapperInner>
                  <S.FeeDiv>₩</S.FeeDiv>
                  <S.FeeInput
                    type="text"
                    name="min"
                    onChange={e => handleRange(e, 0)}
                    value={payRange[0]}
                  />
                </S.BodyWrapperInner>
              </S.BodyWrapper>
              <S.BodyWrapperDiv>
                <S.GraySmallSpan>
                  <FontAwesomeIcon icon={faMinus} />
                </S.GraySmallSpan>
              </S.BodyWrapperDiv>
              <S.BodyWrapper>
                <S.GraySmallSpan>최고 요금</S.GraySmallSpan>
                <S.BodyWrapperInner>
                  <S.FeeDiv>₩</S.FeeDiv>
                  <S.FeeInput
                    type="text"
                    name="max"
                    onChange={e => handleRange(e, 1)}
                    value={payRange[1]}
                  />
                </S.BodyWrapperInner>
              </S.BodyWrapper>
            </S.BodyInner>
          </S.BodyContainer>
        </S.BodyDiv>
        <S.BodyDiv>
          <S.H2>공간 유형</S.H2>
          {ROOM_TYPE.map(type => {
            return (
              <S.BodyTypeDiv key={type.id}>
                <S.BodyTypeFilter>
                  <CheckBox
                    handleChecked={handleChecked}
                    type={{ id: type.id, name: type.name }}
                    checkedList={checkedList}
                  />
                  <S.BodyTypeFilterInner>
                    <S.TitleSpan>{type.title}</S.TitleSpan>
                    <S.GraySmallSpan>{type.explanation}</S.GraySmallSpan>
                  </S.BodyTypeFilterInner>
                </S.BodyTypeFilter>
              </S.BodyTypeDiv>
            );
          })}
        </S.BodyDiv>
        <S.BodyDiv>
          <S.H2>편의시설</S.H2>
          {ROOM_PROVIDE.filter(el => el.id <= isAdd).map(type => {
            return (
              <S.BodyTypeDiv key={type.id}>
                <S.BodyTypeFilter>
                  <CheckBox
                    handleChecked={handleChecked}
                    type={{ id: type.id, name: type.name }}
                    checkedList={checkedList}
                  />
                  <S.BodyTypeFilterInner>
                    <S.TitleSpan>{type.title}</S.TitleSpan>
                  </S.BodyTypeFilterInner>
                </S.BodyTypeFilter>
              </S.BodyTypeDiv>
            );
          })}
          <S.MoreDiv>
            <S.MoreSpan onClick={handleProvide}>
              {isAdd === 6 ? '더 보기' : '접기'}
            </S.MoreSpan>
          </S.MoreDiv>
        </S.BodyDiv>
      </S.Body>
      <S.Footer>
        <S.FooterDiv>
          <div>
            <S.AllCancelSpan onClick={handleCheckCancel}>
              전체 해제
            </S.AllCancelSpan>
          </div>
          <S.BlackBtn>숙소 648개 표시</S.BlackBtn>
        </S.FooterDiv>
      </S.Footer>
    </S.StyleFilter>
  );
};

export default Filter;
