import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const LocalNavContainer = styled.div`
  ${props => props.theme.flexBox('row', 'center', 'center')}
  position: sticky;
  top: 80px;
  width: 100%;
  height: 70px;
  padding: 0 90px;
  background-color: white;
  box-shadow: 0px 15px 10px -15px rgba(100, 100, 100, 0.2);
  z-index: 10;
`;

export const LocalNavWrapper = styled.div`
  width: 90%;
  ${props => props.theme.flexBox('row', 'space-between', 'center')}
`;

export const LocalNavBox = styled.div`
  ${props => props.theme.flexBox('column', 'center', 'center')}
  width: 70px;
`;

export const CategoryIcon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  padding: 8px;
  z-index: 15;
  color: #595959;
  cursor: pointer;
`;

export const CategoryName = styled.div`
  font-size: 0.75rem;
  color: #595959;
  cursor: pointer;
`;

export const FilterButton = styled.div`
  ${props => props.theme.flexBox('row', 'center', 'center')}
  width: 80px;
  height: 45px;
  margin-left: 30px;
  border-radius: 13px;
  border: 1px solid gray;
  color: black;
  cursor: pointer;
  :hover {
    box-shadow: 1px 1px 4px rgba(100, 100, 100, 0.3);
  }
`;

export const FilterIcon = styled(FontAwesomeIcon)`
  width: 14px;
  margin-right: 8px;
`;

export const FilterText = styled.span`
  font-size: 0.82rem;
`;
