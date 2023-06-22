import React from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
import { DatePickerWrapper } from './StyleDayPicker';
registerLocale('ko', ko);

const Calendar = ({ selectedDate, setSelectedDate }) => {
  return (
    <DatePickerWrapper>
      <DatePicker
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        inline
        locale="ko"
      />
    </DatePickerWrapper>
  );
};

export default Calendar;
