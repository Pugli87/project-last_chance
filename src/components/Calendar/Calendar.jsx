import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = ({ date, handleDateChange }) => {
  return (
    <DatePicker
      selected={date}
      onChange={handleDateChange}
      inline
      maxDate={new Date()}
      className="customDatePicker"
    />
  );
};

export default Calendar;
