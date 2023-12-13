import React, { useState } from 'react';
import { Container, WrapperDaily, Wrapper } from './DiaryStyled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ReactComponent as YourSvg } from '../../../assets/icons/calendar.svg';
import DailyIntake from '../../DailyIntake/DailyIntake';
const Diary = () => {
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const handleDateChange = selectedDate => {
    setDate(selectedDate);
    setShowCalendar(false);
  };
  return (
    <Container>
      <div className="containerDiary">
        {showCalendar && (
          <DatePicker selected={date} onChange={handleDateChange} inline />
        )}
        <h1>{date.toLocaleDateString()}</h1>
        <button
          className="btnDiary"
          onClick={() => setShowCalendar(!showCalendar)}
        >
          <YourSvg />
        </button>{' '}
      </div>
      <Wrapper>
        <WrapperDaily>
          <DailyIntake />
        </WrapperDaily>
      </Wrapper>
    </Container>
  );
};
export default Diary;
