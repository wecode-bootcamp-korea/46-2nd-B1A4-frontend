import styled from 'styled-components';

export const Container = styled.div`
  margin: 16px 0 72px 0;
  padding: 0 80px;
  display: grid;
  column-gap: 15px;
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
