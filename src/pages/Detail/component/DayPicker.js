import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
import { DatePickerWrapper } from './StyleDayPicker';
registerLocale('ko', ko);

const Calendar = ({ selectedDate, setSelectedDate }) => {
  const isDateDisabled = date => {
    const today = new Date();
    return date < today.setHours(0, 0, 0, 0);
  };
  return (
    <DatePickerWrapper>
      <DatePicker
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        inline
        locale="ko"
        filterDate={date => !isDateDisabled(date)}
        minDate={new Date()}
        className="custom-datepicker"
        dayClassName={date => (isDateDisabled(date) ? 'disabled-day' : '')}
      />
    </DatePickerWrapper>
  );
};

export default Calendar;
