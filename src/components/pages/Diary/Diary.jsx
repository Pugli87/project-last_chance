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
        <ListnotFood />
        <DateComponnet />
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Nombre del producto:
              <input type="text" value={name} onChange={e => setName(e.target.value)} required />
            </label>
          </div>
          <div>
            <label>
              Número:
              <input type="number" value={number} onChange={e => setNumber(e.target.value)} required />
            </label>
          </div>
          <div>
            <button n type="submit">Guardar</button>
          </div>
        </form>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} - {item.number}
              <button onClick={() => handleDelete(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
    </Container>
  );
};

export default Diary;
