import React, { useState, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Modal from '../Modal/Modal';
import Login from '../Login/Login';
import useOnClickOutside from '../../hooks/useOutsideClick';
import {
  NavContainer,
  NavUnit,
  Button,
  DropDownContainer,
  DropDownUnit,
} from './StyleNav';

const Nav = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const openModal = () => {
    setShowModal(prev => !prev);
  };

  const openDropDown = () => {
    setShowDropDown(prev => !prev);
  };

  const dropDownRef = useRef();
  useOnClickOutside(dropDownRef, () => {
    setShowDropDown(false);
  });

  return (
    <>
      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          content={<Login />}
        />
      )}
      <NavContainer>
        <NavUnit>Space Around</NavUnit>
        <NavUnit>검색창</NavUnit>
        <NavUnit>당신의 공간을 예약하세요</NavUnit>
        <Button onClick={openDropDown}>Profile</Button>
        {showDropDown && (
          <DropDownContainer ref={dropDownRef}>
            <DropDownUnit onClick={openModal}>로그인</DropDownUnit>
            <DropDownUnit onClick={openModal}>회원가입</DropDownUnit>
          </DropDownContainer>
        )}
      </NavContainer>
      <Outlet />
    </>
  );
};

export default Nav;
