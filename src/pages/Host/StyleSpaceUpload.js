import styled from 'styled-components';

export const HostBackground = styled.div`
  ${props => props.theme.flexBox('column', 'center', 'center')};
  width: 100vw;
  height: 1100px;
`;

export const HostContainer = styled.div`
  ${props => props.theme.flexBox('column', 'flext-start', 'flex-start')};
  width: 900px;
  margin: 90px 0 20px;
  padding: 10px 150px;
  border-radius: 20px;
`;

export const Header = styled.h1`
  margin-bottom: 20px;
  letter-spacing: 6px;
  font-size: 2.4rem;
  font-weight: 600;
  color: #6d6d6d;
`;

export const SearchBtn = styled.button`
  width: 20%;
  margin: 5px 0px 5px 10px;
  padding: 12px 20px;
  background-color: white;
  border: 1.8px solid ${props => props.theme.primaryColor};
  border-radius: 10px;
  font-size: 0.9rem;
  color: gray;
  cursor: pointer;
  z-index: 1000;
`;

export const Title = styled.div`
  margin: 26px 6px 6px;
  font-size: 1.5rem;
`;

export const InputBox = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 5px 0;
  border: 1px solid lightgray;
  border-radius: 8px;
  font-size: 0.9rem;
  z-index: 100;
  outline: none;
  :focus {
    outline: 1px solid gray;
  }
  :disabled {
    background-color: #efefef;
  }
`;

export const AddrSearch = styled.div`
  ${props => props.theme.flexBox('row', 'flext-start', 'flex-start')};
  width: 100%;
`;

export const SelectCategory = styled.select`
  width: 200px;
  margin: 5px 0;
  padding: 10px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 8px;
  color: gray;
  font-size: 0.9rem;
  z-index: 100;
  cursor: pointer;
  :focus {
    outline: 1px solid gray;
  }
`;

export const CategoryOption = styled.option`
  z-index: 100;
  cursor: pointer;
`;

export const SubmitBtn = styled.button`
  width: 140px;
  margin: 50px 0 10px 77%;
  padding: 12px 20px;
  background-color: ${props => props.theme.primaryColor};
  border: none;
  border-radius: 15px;
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  z-index: 1000;
  cursor: pointer;
`;
