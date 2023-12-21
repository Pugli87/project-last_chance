import React, { useState, useEffect } from 'react';
import { Container, Title, SubtitleDate, CaloricValue, Li } from './DateStyled';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';

const DateComponnet = ({ selectedDate }) => {
  const user = useSelector(state => state.auth.currentUser);
  const loading = useSelector(state => state.auth.isLoading);
  const dateState = useSelector(state => state.auth.date)
  const [date, setDate] = useState(dateState || new Date())

  useEffect(()=>{
    if(dateState) return setDate(dateState)
  },[dateState])

  return (
    <Container>
      <Title>Resumen para el {date.toLocaleDateString()}</Title>
      <ul>
        <Li>
          <SubtitleDate>Quedan</SubtitleDate>
          <div>
            {loading ? (
              <Loader variant="points" />
            ) : (
              <CaloricValue id="missingCalories">{user.name} kcal</CaloricValue>
            )}
          </div>
        </Li>
        <Li>
          <SubtitleDate>Cosumido</SubtitleDate>
          <div>
            {loading ? (
              <Loader variant="points" />
            ) : (
              <CaloricValue id="caloriesConsumed">
                {user.name} kcal
              </CaloricValue>
            )}
          </div>
        </Li>
        <Li>
          <SubtitleDate>Tasa diaria</SubtitleDate>
          <div>
            {loading ? (
              <Loader variant="points" />
            ) : (
              <CaloricValue id="totalsCalories">{user.name} kcal</CaloricValue>
            )}
          </div>
        </Li>
        <Li>
          <SubtitleDate>N% de lo normal</SubtitleDate>
          <div>
            {loading ? (
              <Loader variant="points" />
            ) : (
              <CaloricValue id="percentage">{user.name}%</CaloricValue>
            )}
          </div>
        </Li>
      </ul>
    </Container>
  );
};

export default DateComponnet;
