import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import {
  faStar,
  faXmark,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import * as S from './StyleMoreReview';

const MoreReview = ({ isOpenModal, handleModal, focusId }) => {
  const [reviewInfo, setReviewInfo] = useState([]);
  const [userReview, setUserReview] = useState([]);
  const focusRef = useRef([]);

  const params = useParams();
  const studioId = params.id;

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_HOST}/studios/reviews/${studioId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => response.json())
      .then(result => {
        setReviewInfo(result.data);
        setUserReview(result.data[0].userReview);
      });
  }, []);

  const newArr = [...userReview];

  useEffect(() => {
    const focusedItem = focusRef.current.find(el => {
      return Number(el.id) === Number(focusId);
    });
    focusedItem?.scrollIntoView({ behavior: 'smooth' });
  }, [reviewInfo, focusId]);

  const handleSearchInput = e => {
    const filterArr = newArr.filter(el => el.review.includes(e.target.value));

    filterArr.length === 0
      ? setUserReview(reviewInfo[0].userReview)
      : setUserReview(filterArr);

    if (e.target.value.length === 0) {
      setUserReview(reviewInfo[0].userReview);
    }
  };

  if (!reviewInfo.length) return null;

  return (
    <S.StyleReview>
      <S.ReviewHeader>
        <S.HeaderDiv>
          <S.CloseBtn>
            <FontAwesomeIcon icon={faXmark} onClick={handleModal} />
          </S.CloseBtn>
        </S.HeaderDiv>
        <div>
          <S.H2>
            <S.Star>
              <FontAwesomeIcon icon={faStar} />
            </S.Star>
            <S.ReviewCountSpan>
              {reviewInfo[0].averageRating} · 후기 {reviewInfo[0].ratingCount}개
            </S.ReviewCountSpan>
          </S.H2>
          <S.SearchDiv>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <S.SearchInput
              type="search"
              placeholder="후기 검색"
              onChange={handleSearchInput}
            />
          </S.SearchDiv>
        </div>
      </S.ReviewHeader>
      <S.Body>
        {userReview?.map((user, idx) => {
          return (
            <S.ReviewBody
              id={user.reviewId}
              key={user.reviewId}
              ref={el => {
                focusRef.current[idx] = el;
              }}
            >
              <S.BodyContainer>
                <S.BodyWrapper>
                  <S.UserImg
                    imgSrc={
                      user.userProfileImage === 'NULL'
                        ? '/images/userImg.png'
                        : user.userProfileImage
                    }
                  />
                  <S.BodyInner>
                    <S.NameSpan>{user.userName}</S.NameSpan>
                    <S.GraySpan>
                      {user.userReviewDate.substr(0, 4)}년
                      {user.userReviewDate.substr(5, 2)}월
                    </S.GraySpan>
                  </S.BodyInner>
                </S.BodyWrapper>
              </S.BodyContainer>
              <S.UserReview>
                <S.UserReviewInner>{user.review}</S.UserReviewInner>
              </S.UserReview>
            </S.ReviewBody>
          );
        })}
      </S.Body>
    </S.StyleReview>
  );
};

export default MoreReview;
