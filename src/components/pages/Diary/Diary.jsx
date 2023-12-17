import React, { useState, useEffect } from 'react';
import {
  Container,
  Wrapper,
  ContainerDiary,
  BtnDiary,
  BtnModal,
  BtnCloseModal,
  Title,
} from './DiaryStyled';
import './CalendarStyled.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ReactComponent as CalendarSvg } from '../../../assets/icons/calendar.svg';
import { ReactComponent as CloseModalSvg } from '../../../assets/icons/arrow.svg';
import DailyIntake from '../../DailyIntake/DailyIntake';
import ModalDiary from '../../ModalDiary/ModalDiary';
import Modal from 'react-modal';
Modal.setAppElement('#root');

const Diary = () => {
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [selectedProducts, setSelectedProducts] = useState({
    [new Date().toLocaleDateString()]: [],
  });

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
  const handleDateChange = selectedDate => {
    setDate(selectedDate);
    setShowCalendar(false);

    const formattedDate = selectedDate.toLocaleDateString();
    setSelectedProducts({
      ...selectedProducts,
      [formattedDate]: selectedProducts[formattedDate] || [],
    });
  };

  const handleCalendarClick = event => {
    event.stopPropagation();
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);

      if (window.innerWidth > 767 && modalIsOpen) {
        setModalIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [modalIsOpen]);

  const handleSubmit = updatedItems => {
    const formattedDate = date.toLocaleDateString();
    setSelectedProducts({ ...selectedProducts, [formattedDate]: updatedItems });
  };

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
            <BtnCloseModal onClick={() => setModalIsOpen(false)}>
              <CloseModalSvg />
            </BtnCloseModal>
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
              <Title>{date.toLocaleDateString()}</Title>
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
                <CalendarSvg />
              </BtnDiary>
            </ContainerDiary>
            <Wrapper>
              <DailyIntake
                selectedProducts={selectedProducts}
                onSubmit={handleSubmit}
                selectedDate={date.toLocaleDateString()}
              />
            </Wrapper>
          </Container>
        </>
      )}
    </>
  );
};

export default Diary;
