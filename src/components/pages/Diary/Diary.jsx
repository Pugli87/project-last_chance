import React, { useState, useEffect } from 'react';
//import ListnotFood from 'components/ListnotFood/ListnotFood';
import {
  Container,
  // WrapperResult,
  //WrapperDaily,
  Wrapper,
  ContainerDiary,
  BtnDiary,
  BtnModal,
} from './DiaryStyled';
import './CalendarStyled.scss';
//import DateComponnet from 'components/DateComponent/DateComponent';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ReactComponent as YourSvg } from '../../../assets/icons/calendar.svg';
import DailyIntake from '../../DailyIntake/DailyIntake';
import ModalDiary from '../../ModalDiary/ModalDiary';
import Modal from 'react-modal';
Modal.setAppElement('#root');
const Diary = () => {
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const handleDateChange = selectedDate => {
    setDate(selectedDate);
    setShowCalendar(false);
  };

  const handleCalendarClick = event => {
    event.stopPropagation();
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const customStyles = {
    content: {
      position: 'absolute',
      inset: '12% 0px auto',
      border: '1px solid rgb(204, 204, 204)',
      background: 'rgb(255, 255, 255)',
      overflow: 'auto',
      borderradius: '4px',
      outline: 'none',
      height: '100vh',
      padding: '20px',
    },
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {modalIsOpen ? (
        <div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            contentLabel="Mi Modal"
            style={customStyles}
          >
            <button onClick={() => setModalIsOpen(false)}>---</button>
            <ModalDiary />
          </Modal>
        </div>
      ) : (
        <>
          {windowWidth <= 767 && (
            <BtnModal onClick={() => setModalIsOpen(true)}>+</BtnModal>
          )}
          <Container>
            <ContainerDiary>
              <h1>{date.toLocaleDateString()}</h1>
              <BtnDiary onClick={() => setShowCalendar(!showCalendar)}>
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
              </BtnDiary>
            </ContainerDiary>

            <Wrapper>
              <DailyIntake />
              {/*
                <WrapperDaily></WrapperDaily>
                <WrapperResult>
                  <DateComponnet />
                  <ListnotFood />
                </WrapperResult>
              */}
            </Wrapper>
          </Container>
        </>
      )}
    </>
  );
};

export default Diary;
