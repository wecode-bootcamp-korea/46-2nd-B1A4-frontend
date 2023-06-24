import styled from 'styled-components';

export const Container = styled.div`
  padding: 80px;
  max-width: 1400px;
  margin: 0 auto;
`;

export const Wrap = styled.div`
  display: grid;
  column-gap: 15px;
  grid-template-columns: repeat(4, 1fr);
  transition: 0.5s;
  padding-bottom: 80px;

  @media screen and (max-width: 830px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 530px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Title = styled.p`
  font-size: 32px;
  font-weight: bold;
  padding: 48px 0;
`;
