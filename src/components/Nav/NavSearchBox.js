import React from 'react';
import NavDropDown from './NavDropDown';
import { VerticalLine, NavBox } from './StyleNavSearchBox';

const NavSearchBox = ({
  name,
  title,
  isNavOpen,
  navDropDownName,
  setNavDropDownName,
}) => {
  const openNavDropDown = name => {
    if (!navDropDownName) setNavDropDownName(name);
    else if (navDropDownName === name) return null;
    else setNavDropDownName('');
  };

  return (
    <>
      <NavBox
        isNavOpen={isNavOpen}
        color={isNavOpen ? 'NavOpen' : null}
        onClick={() => openNavDropDown(name)}
      >
        {title}
        {navDropDownName === name && <NavDropDown name={name} />}
      </NavBox>
      {name !== 'guestCount' && <VerticalLine />}
    </>
  );
};

export default NavSearchBox;
