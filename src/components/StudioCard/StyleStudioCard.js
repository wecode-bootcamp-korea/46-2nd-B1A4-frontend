import styled from 'styled-components';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
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

export const Img = styled.img`
  border-radius: 20px;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin-top: 10px;
  margin-left: 5px;
`;

export const Average = styled.span`
  position: absolute;
  font-weight: 500;
  font-size: 17px;
  bottom: 40px;
  right: 5px;
`;

export const Icon = styled(AiFillStar)`
  font-size: 17px;
  position: absolute;
  right: 25px;
  bottom: 2px;
  color: ${props => props.theme.primaryColor};
`;

export const Content = styled.p`
  font-size: 15px;
  margin-top: 5px;
  margin-left: 5px;
`;

export const ContentPrice = styled(Content)`
  font-weight: 500;
`;

export const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
  .slick-list {
    border-radius: 20px;
    aspect-ratio: 1;
  }
  .slick-dots {
    bottom: 2px;
  }
  .slick-arrow {
    z-index: 1;
  }
  .slick-prev {
    left: 0px;
  }
  .slick-next {
    right: 10px;
  }
  .slick-prev:before,
  .slick-next:before {
    font-size: 30px;
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
  z-index: 1;
  font-size: 30px;
  background: none;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const HeartImg = styled.img`
  width: 25px;
  height: 21px;
`;
