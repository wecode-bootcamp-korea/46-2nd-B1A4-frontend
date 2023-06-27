import styled from 'styled-components';

export const DatePickerWrapper = styled.div`
  margin-top: 24px;
  .disabled-day {
    text-decoration: line-through;
    color: #888888;
  }
  .react-datepicker {
    font-family: 'Circular', -apple-system, BlinkMacSystemFont, 'Roboto',
      'Helvetica Neue', sans-serif;
    font-size: 14px;
    border: none;
    width: 100%;
  }
  .react-datepicker__header {
    background-color: white;
    border: none;
  }
  .react-datepicker__month-container {
    width: 100%;
  }
  .react-datepicker__navigation {
    top: 5px;
    line-height: 23px;
    border: 0.45rem solid transparent;
  }
  .react-datepicker__navigation--previous {
    left: 20px;
  }
  .react-datepicker__navigation--next {
    right: 20px;
  }
  .react-datepicker__week {
    margin: 0;
  }
  .react-datepicker__day-names {
    margin-top: 10px;
  }
  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    color: #484848;
    font-size: 20px;
    width: 50px;
    height: 50px;
    line-height: 50px;
  }
  .react-datepicker__current-month {
    color: #484848;
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 10px;
  }
  .react-datepicker__day--outside-month {
    color: #dce0e0;
  }
  .react-datepicker__day--selected,
  .react-datepicker__day:hover {
    background-color: ${props => props.theme.primaryColor};
    color: white;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;
