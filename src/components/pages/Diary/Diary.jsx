import React, { useState } from 'react';
import GramosComponent from '../../GramosComponent/GramosComponent';
import ButtonComponent from '../../ButtonComponent/ButtonComponent';
import ProductNameComponent from '../../ProductNameComponent/ProductName';
import KaloriesComponent from '../../KaloriesComponent/KaloriesComponent';
import ListnotFood from 'components/ListnotFood/ListnotFood';
import { Container, Button} from './DiaryStyled';
import DateComponnet from 'components/DateComponent/DateComponent';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ReactComponent as YourSvg } from '../../../assets/icons/calendar.svg';

const Diary = () => {
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    setShowCalendar(false); 
  }

  return (
    <Container className='containerDiary'>
      <button className='btnDiary' onClick={() => setShowCalendar(!showCalendar)}>
        <YourSvg />
      </button>
      {showCalendar && (
        <DatePicker selected={date} onChange={handleDateChange} inline />
      )}
      <h1>{date.toLocaleDateString()}</h1>
      <ProductNameComponent />
      <GramosComponent />
      <KaloriesComponent />
      <ListnotFood/>
      <DateComponnet/>
    </Container>
  )
}

export default Diary;