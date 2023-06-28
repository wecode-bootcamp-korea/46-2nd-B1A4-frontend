import styled from 'styled-components';

export const Container = styled.div`
  ${props => props.theme.flexBox('column', 'center', 'center')};
  width: 100%;
  height: 100%;
  background-color: rgba(10, 10, 10, 0.2);
  z-index: 1000;
`;

export const PostCodeBox = styled.div`
  width: 500px;
  margin: 30px;
`;

export const CloseBtn = styled.button`
  padding: 8px 18px;
  border-radius: 4px;
  border: 1px solid lightgray;
  background-color: white;
  font-size: 1rem;
  color: gray;
  z-index: 1000;
  cursor: pointer;
`;

export const EnterBtn = styled.button`
  cursor: pointer;
`;
