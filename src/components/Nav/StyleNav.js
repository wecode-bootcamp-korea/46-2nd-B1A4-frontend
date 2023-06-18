import styled, { keyframes, css } from 'styled-components';

const navAnimation = keyframes`
 0% { height: 32px; width: 100%; opacity: 0.5; top: 0}
 100% { height: 64px; width: 100%; opacity: 1; top: 80px; border-radius: 32px }
`;

export const TotalContainer = styled.div`
  position: sticky;
  top: 0;
`;

export const NavContainer = styled.div`
  width: 100vw;
  min-width: 1080px;
  height: 80px;
  background-color: white;
  border-bottom: ${props => props.border};
  ${props => props.theme.flexBox('row', 'space-between', 'center')};
`;

export const NavLeft = styled.div`
  width: 90vw;
  ${props => props.theme.flexBox('row', 'space-between', 'center')};
`;

export const NavLogo = styled.div`
  font-size: 1rem;
  margin: 0 5px;

  img {
    height: 70px;
  }
`;

export const NavWrapper = styled.div`
  padding: 10px 20px;
  min-width: 228px;
  color: #595959;
  font-size: 0.75rem;
  border: 1px dashed ${props => props.theme.primaryColor};
  border-radius: 20px;
  cursor: pointer;
`;

export const NavBox = styled.div`
  position: relative;
  padding: 24px 10%;
  color: #595959;
  border-radius: 32px;
  font-size: 0.85rem;
  font-weight: 500;
  ${props => props.theme.flexBox('row', 'center', 'center')};
  ${props =>
    props.isNavOpen &&
    css`
      width: 35%;
      min-width: 180px;
      font-size: 0.95rem;
      :hover {
        background-color: rgba(221, 221, 221, 0.3);
      }
    `};
`;

export const NavUnit = styled.div`
  padding: 0 20px;
  font-size: 0.85rem;
`;

export const NavSearchBarWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${props => props.theme.flexBox('row', 'space-evenly', 'center')};
`;

export const NavSearchBar = styled.div`
  margin: 0 20px;
  min-width: 480px;
  height: ${props => props.height};
  background-color: white;
  border: 1px solid #dddddd;
  border-radius: ${props => props.radius};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  ${props => props.theme.flexBox('row', 'space-evenly', 'center')};
  ${props =>
    props.isNavOpen &&
    css`
      animation: ${navAnimation} 0.5s;
      width: 100%;
      min-width: 800px;
    `};
`;

const large = css`
  width: 100px;
  height: 50px;
  border-radius: 25px;
  font-size: 1rem;
`;

const regular = css`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  font-size: 0.75rem;
`;

const sizeTable = {
  regular,
  large,
};

export const SearchIcon = styled.div`
  margin-right: 10px;
  padding: 5px;
  color: white;
  background-color: ${props => props.theme.primaryColor};
  ${props => props.theme.flexBox('row', 'center', 'center')};
  ${props => sizeTable[props.size]};
`;

export const SearchIconText = styled.span`
  padding: 0 8px;
`;

export const VerticalLine = styled.div`
  width: 1px;
  height: 55%;
  background-color: lightgray;
`;

export const SearchBox = styled.div`
  ${props => props.theme.flexBox('column')};
  padding: 0 120px 15px;
  background-color: white;
  z-index: 10;
`;

export const SearchUnit = styled.div`
  margin: 10px 90px 10px 270px;
  padding: 3px 0;
  min-width: 100px;
  text-align: center;
  cursor: pointer;
  ::after {
    content: '';
    display: block;
    width: 100%;
    height: 1.5px;
    bottom: 10px;
    left: 0;
    background-color: #000;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  :hover {
    color: #000;
  }
  :hover::after {
    transform: scaleX(1);
  }
`;

export const Button = styled.button`
  position: relative;
  min-width: 100px;
  height: 44px;
  margin: 0 30px;
  padding: 10px;
  color: white;
  background-color: ${props => props.theme.primaryColor};
  border: none;
  border-radius: 50px;
  font-size: 16px;
  cursor: pointer;
`;

export const NavZoom = styled.div`
  position: absolute;
  top: 80px;
  width: 100%;
  height: 80px;
  z-index: 10;
`;

export const DropDownContainer = styled.div`
  position: absolute;
  top: 72px;
  right: 20px;
  width: 120px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 0 6px rgba(100, 100, 100, 0.2);
  z-index: 2;
  cursor: pointer;
`;

export const DropDownWrapper = styled.div`
  margin: 10px 0;
`;

export const DropDownUnit = styled.div`
  width: 100%;
  padding: 12px 22px;
  color: #595959;
  font-size: 0.94rem;
  :hover {
    background-color: #f4f4f4;
  }
`;

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  background: ${props => props.color};
  z-index: 2;
`;
