import React, { useState } from 'react';
import ListnotFood from 'components/ListnotFood/ListnotFood';
import { Container } from './DiaryStyled';
import './DiaryStyled.scss'; 
import DateComponnet from 'components/DateComponent/DateComponent';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ReactComponent as YourSvg } from '../../../assets/icons/calendar.svg';

const Diary = () => {
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleDateChange = selectedDate => {
    setDate(selectedDate);
    setShowCalendar(false);
  };

  const handleCalendarClick = event => {
    event.stopPropagation();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setItems([...items, { name, number }]);
    setName('');
    setNumber('');
  };

  const handleDelete = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };

  return (
    <Container>
      <div className="containerDiary">
        <h1>{date.toLocaleDateString()}</h1>
        <button
          className="btnDiary"
          onClick={() => setShowCalendar(!showCalendar)}
        >
        {showCalendar && (
          <div onClick={handleCalendarClick}>
            <DatePicker 
              selected={date} 
              onChange={handleDateChange} 
              inline 
              maxDate={new Date()} 
              className="customDatePicker" 
            />
          </div>
        )}
          <YourSvg />
        </button>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit} className="form">
            <div className="input-group">
              <label className='labelForm'>
                Ingresa el nombre del producto
                <input type="text" value={name} onChange={e => setName(e.target.value)} required />
              </label>
              <label className='labelForm'>
                Gramos*
                <input type="text" value={number} onChange={e => setNumber(e.target.value)} onKeyPress={event => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }} required />
              </label>
            </div>
            <button className='btnSave' type="submit">+</button>
          </form>
          <ul className='formList'>
            {items.map((item, index) => (
              <li className='listForm' key={index}>
                {item.name} - {item.number} g - {parseInt(item.number, 10) + 10} kcal
                <button className='btnDelete' onClick={() => handleDelete(index)}>x</button>
              </li>
            ))}
          </ul>
        </div>
        <ListnotFood />
        <DateComponnet />
    </Container>
  );
};

export default Diary;
