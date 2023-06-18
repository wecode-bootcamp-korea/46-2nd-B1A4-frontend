import styled from 'styled-components';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Card = styled.div`
  margin-bottom: 20px;
  overflow: hidden;
  position: relative;

  &:hover {
    .slick-prev:before,
    .slick-next:before {
      opacity: 1;
      transition: all 1s;
    }
  }
`;

export const ImgBox = styled.img`
  width: 100%;
  border-radius: 20px;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin-top: 10px;
`;

export const Content = styled.p`
  font-size: 15px;
  margin-top: 5px;
`;

export const ContentPrice = styled(Content)`
  font-weight: 500;
`;

export const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
  .slick-dots {
    bottom: 2px;
  }
  .slick-arrow {
    z-index: 5;
  }
  .slick-prev {
    left: 0px;
  }
  .slick-next {
    right: 15px;
  }
  .slick-prev:before,
  .slick-next:before {
    font-size: 35px;
    opacity: 0;
    transition: all 1s;
  }
`;

export const StyledLink = styled(Link)`
  color: black;
  position: relative;
`;

export const WishBtn = styled.button`
  position: absolute;
  right: 3px;
  top: 10px;
  z-index: 10;
  font-size: 30px;
  background: none;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const OutlineHeart = styled(AiOutlineHeart)`
  color: white;
`;

export const FillHeart = styled(AiFillHeart)`
  color: red;
`;
