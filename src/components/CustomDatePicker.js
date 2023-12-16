// import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function CustomDatePicker({ selectedDate, onChange }) {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={onChange}
      dateFormat="dd/MM/yyyy"
      showTimeSelect={false}
      showTimeInput={false}
    />
  );
}

export default CustomDatePicker;
