import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: yellow;
  width: 100vw;
  height: 80px;
`;

export const NavUnit = styled.div`
  padding: 0 20px;
`;

export const Button = styled.button`
  position: relative;
  min-width: 100px;
  margin: 0 10px;
  padding: 10px;
  height: 50px;
  border-radius: 50px;
  border: none;
  background-color: pink;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
`;

export const DropDownContainer = styled.div`
  position: absolute;
  top: 80px;
  right: 20px;
  background-color: white;
  width: 200px;
  height: 200px;
  border-radius: 15px;
  box-shadow: 0 0 6px rgba(100, 100, 100, 0.2);
`;

export const DropDownUnit = styled.div`
  width: 100%;
  height: 40px;
  padding: 16px;
`;
