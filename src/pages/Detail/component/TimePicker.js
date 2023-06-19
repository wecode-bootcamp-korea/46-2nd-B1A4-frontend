import React, { useState } from 'react';
import { TimeTable } from '../StyleDetail';

const TimePicker = ({ setTime, bookingNum }) => {
  return (
    <TimeTable
      startNum={0}
      endNum={24}
      maxTime={10}
      complete={bookingNum}
      onClick={time => setTime(time)}
    />
  );
};

export default TimePicker;
