import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import * as S from './StyleReview';
import ReviewModal from '../Modal/ReviewModal';

const Review = () => {
  const [reviewInfo, setReviewInfo] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [focusId, setFocusId] = useState(0);

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
      });
  }, [studioId]);

  const handleReviewAll = focusId => {
    setIsOpenModal(prev => !prev);
    if (focusId) {
      setFocusId(focusId);
    }
  };

  if (!reviewInfo.length)
    return (
      <S.NoReview>
        <S.Title>
          <S.ReviewCountSpan>후기 0개</S.ReviewCountSpan>
          <br />
          <br />
        </S.Title>
        <S.TitleNoReview>
          <S.Star>
            <FontAwesomeIcon icon={faStar} />
          </S.Star>
          <S.ReviewCountSpan>
            아직 이 스튜디오에는 리뷰가 없네요!
          </S.ReviewCountSpan>
        </S.TitleNoReview>
      </S.NoReview>
    );

  return (
    <S.StyleReview>
      <div>
        <S.Title>
          <S.Star>
            <FontAwesomeIcon icon={faStar} />
          </S.Star>
          <S.ReviewCountSpan>
            {reviewInfo[0].averageRating} · 후기 {reviewInfo[0].ratingCount}개
          </S.ReviewCountSpan>
        </S.Title>
      </div>
      {reviewInfo.map(review => {
        return review.userReview.slice(0, 6).map((user, idx) => {
          return (
            <S.ReviewBody key={user.reviewId}>
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
              <S.UserReview>
                <S.UserReviewInner>{user.review}</S.UserReviewInner>
                <S.AddBtn
                  onClick={() => handleReviewAll(user.reviewId)}
                  isOverFlow={user.review.length >= 65}
                >
                  <S.MoreSpan>더 보기 </S.MoreSpan>
                  <FontAwesomeIcon icon={faChevronRight} />
                </S.AddBtn>
              </S.UserReview>
            </S.ReviewBody>
          );
        });
      })}
      <S.ReviewFooter>
        <S.ReviewBtn onClick={handleReviewAll}>
          후기 {reviewInfo[0].ratingCount}개 모두 보기
        </S.ReviewBtn>
      </S.ReviewFooter>
      {isOpenModal && (
        <ReviewModal
          isOpenModal={isOpenModal}
          handleModal={handleReviewAll}
          focusId={focusId}
        />
      )}
    </S.StyleReview>
  );
};

export default Review;
