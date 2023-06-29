import React, { useState, useRef, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal/Modal';
import Login from '../Login/Login';
import NavSearchBox from './NavSearchBox';
import LocalNav from '../../components/Nav/LocalNav';
import useOnClickOutside from '../../hooks/useOutsideClick';
import { userInfo } from '../../recoilState';
import * as S from './StyleNav';

const Nav = () => {
  const navRef = useRef();
  const dropDownRef = useRef();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [navDropDownName, setNavDropDownName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [myUserInfo, setMyUserInfo] = useRecoilState(userInfo);

  const handleLogin = () => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken && accessToken !== undefined) {
      setIsLoggedIn(true);
    }
  };

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  const openDropDown = () => {
    setShowDropDown(prev => !prev);
  };

  const openNav = () => {
    setIsNavOpen(true);
  };

  useOnClickOutside(dropDownRef, () => {
    setShowDropDown(false);
  });

  useOnClickOutside(navRef, () => {
    setIsNavOpen(false);
    setNavDropDownName('');
  });

  // useEffect(() => {
  //   if (localStorage.getItem('accessToken')) {
  //     fetch(`${process.env.REACT_APP_SERVER_HOST}/users`, {
  //       headers: {
  //         Authorization: localStorage.getItem('accessToken'),
  //       },
  //     })
  //       .then(res => res.json())
  //       .then(data => {
  //         if (data) {
  //           setMyUserInfo(data.data[0]);
  //         }
  //       });
  //   }
  // }, [isLoggedIn]);

  return (
    <>
      <S.Background
        color={isNavOpen ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0)'}
        zIndex={isNavOpen ? 200 : ''}
        height={isNavOpen ? '100%' : '0'}
      >
        <S.TotalContainer>
          {showModal && (
            <Modal
              showModal={showModal}
              setShowModal={setShowModal}
              header="로그인 또는 회원 가입"
              content={<Login />}
            />
          )}
          <S.NavContainer border={isNavOpen ? 'none' : '0.5px solid lightgray'}>
            <S.NavLeft>
              <S.NavLogo
                onClick={() => {
                  navigate('/?limit=9&studioCategoryId=1');
                }}
              >
                <img src="/images/logo_v2.png" alt="logo" />
              </S.NavLogo>
              {!isNavOpen && (
                <S.NavSearchBar
                  height={isNavOpen ? '64px' : '48px'}
                  radius={isNavOpen ? '32px' : '24px'}
                >
                  <S.NavBox onClick={openNav}>어디든지</S.NavBox>
                  <S.VerticalLine />
                  <S.NavBox onClick={openNav}>언제든지</S.NavBox>
                  <S.VerticalLine />
                  <S.NavBox onClick={openNav}>인원</S.NavBox>
                  <S.SearchIcon size={isNavOpen ? 'large' : 'regular'}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} color="white" />
                  </S.SearchIcon>
                </S.NavSearchBar>
              )}
              {isNavOpen && <S.SearchUnit>스튜디오 공간</S.SearchUnit>}
              <S.NavWrapper
                onClick={() => {
                  navigate('/host-signup');
                }}
              >
                당신의 공간을 스페이스 어라운드하세요
              </S.NavWrapper>
            </S.NavLeft>

            <S.DropDownContainer ref={dropDownRef}>
              <S.Button
                onClick={() => {
                  handleLogin();
                  openDropDown();
                }}
              >
                프로필
              </S.Button>
              {showDropDown && (
                <S.DropDownWrapper>
                  {!isLoggedIn && (
                    <>
                      <S.DropDownUnit onClick={openModal}>
                        로그인
                      </S.DropDownUnit>
                      <S.DropDownUnit onClick={openModal}>
                        회원가입
                      </S.DropDownUnit>
                    </>
                  )}
                  {isLoggedIn && (
                    <>
                      <S.DropDownUnit
                        onClick={() => {
                          navigate('/mypage');
                          openDropDown();
                        }}
                      >
                        마이페이지
                      </S.DropDownUnit>
                      <S.DropDownUnit
                        onClick={() => {
                          navigate('/wishlist');
                        }}
                      >
                        위시리스트
                      </S.DropDownUnit>
                      <S.DropDownUnit
                        onClick={() => {
                          openDropDown();
                          navigate('/loading-logout');
                        }}
                      >
                        로그아웃
                      </S.DropDownUnit>
                    </>
                  )}
                </S.DropDownWrapper>
              )}
            </S.DropDownContainer>
          </S.NavContainer>
          <LocalNav />

          {isNavOpen && (
            <S.NavZoom ref={navRef}>
              <S.SearchBox>
                <S.NavSearchBar
                  onClick={openNav}
                  isNavOpen={isNavOpen}
                  height={isNavOpen ? '64px' : '48px'}
                  radius={isNavOpen ? '32px' : '24px'}
                >
                  <S.NavSearchBarWrapper>
                    <NavSearchBox
                      name="location"
                      title="어디든지"
                      isNavOpen={isNavOpen}
                      navDropDownName={navDropDownName}
                      setNavDropDownName={setNavDropDownName}
                    />
                    <NavSearchBox
                      name="calendar"
                      title="언제든지"
                      isNavOpen={isNavOpen}
                      navDropDownName={navDropDownName}
                      setNavDropDownName={setNavDropDownName}
                    />
                    <NavSearchBox
                      name="guestCount"
                      title="인원"
                      isNavOpen={isNavOpen}
                      navDropDownName={navDropDownName}
                      setNavDropDownName={setNavDropDownName}
                    />
                  </S.NavSearchBarWrapper>
                  <S.SearchIcon size={isNavOpen ? 'large' : 'regular'}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} color="white" />
                    {isNavOpen && <S.SearchIconText>검색</S.SearchIconText>}
                  </S.SearchIcon>
                </S.NavSearchBar>
              </S.SearchBox>
            </S.NavZoom>
          )}
        </S.TotalContainer>
      </S.Background>
      <Outlet />
    </>
  );
};

export default Nav;

const NAV_SEARCHBAR = [
  {
    id: 1,
    text: '어디든지',
    onClick: 'openLocationDropDown',
  },
  {
    id: 2,
    text: '언제든지',
    onClick: 'openCalendar',
  },
  {
    id: 3,
    text: '인원수',
    onClick: 'openGuestCount',
  },
];
