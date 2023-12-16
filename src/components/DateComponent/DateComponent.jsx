import React from 'react';
import { Container, Title, SubtitleDate, CaloricValue, Li } from './DateStyled';

const DateComponnet = () => {
  return (
    <Container>
      <Title>Resumen para el 13.08.2023</Title>
      <ul>
        <Li>
          <SubtitleDate>Quedan</SubtitleDate>
          <CaloricValue id="missingCalories">625 kcal</CaloricValue>
        </Li>
        <Li>
          <SubtitleDate>Cosumido</SubtitleDate>
          <CaloricValue id="caloriesConsumed">2175 kcal</CaloricValue>
        </Li>
        <Li>
          <SubtitleDate>Tasa diaria</SubtitleDate>
          <CaloricValue id="totalsCalories">2800 kcal</CaloricValue>
        </Li>
        <Li>
          <SubtitleDate>n% de lo normal</SubtitleDate>
          <CaloricValue id="percentage">78%</CaloricValue>
        </Li>
      </ul>
    </Container>
  );
};

export default DateComponnet;
