import styled from 'styled-components';

export const MainBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const Container = styled.div`
  margin: 0 0 72px 0;
  padding: 100px 80px 20px;
  display: grid;
  column-gap: 25px;
  grid-template-columns: repeat(6, 1fr);
  transition: 0.5s;

  @media screen and (max-width: 1830px) {
    grid-template-columns: repeat(5, 1fr);
    transition: 0.5s;
  }
  @media screen and (max-width: 1600px) {
    grid-template-columns: repeat(4, 1fr);
    transition: 0.5s;
  }
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    transition: 0.5s;
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    transition: 0.5s;
  }
  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
    transition: 0.5s;
  }
`;
