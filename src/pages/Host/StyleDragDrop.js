import styled from 'styled-components';

export const Container = styled.div`
  ${props => props.theme.flexBox('column', 'center', 'center')}
  margin: 30px;
  width: 100vw;
  height: 100vh;
`;

export const InputZone = styled.input``;

export const TextBox = styled.div`
  width: 50vw;
  min-width: 400px;
  max-width: 800px;
  min-height: 40vh;
  padding: 40px;
  border: 2px dashed lightgray;
  border-radius: 25px;
  ${props => props.theme.flexBox('column', 'center', 'center')}
`;

export const TextContent = styled.p`
  margin: 20px;
  font-size: 1rem;
  color: gray;
`;

export const FileNameBox = styled.div`
  ${props => props.theme.flexBox('column', 'center', 'center')}
`;

export const FileList = styled.li`
  font-size: 0.9rem;
  color: gray;
  margin: 4px 0;
`;

export const ListBox = styled.ul``;

export const ImgUploadBtn = styled.button`
  margin: 10px;
  padding: 8px 16px;
  background-color: white;
  font-size: 0.9rem;
  border: 2px solid ${props => props.theme.primaryColor};
  border-radius: 9px;
  color: gray;
  cursor: pointer;
  z-index: 100;
`;
