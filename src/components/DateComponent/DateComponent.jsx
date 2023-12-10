import React from 'react';
import { Container, Title, SubtitleDate, CaloricValue } from './DateStyled';

const DateComponnet = () => {
  return (
    <Container>
      <Title>Resumen para el 13.08.2023</Title>
      <SubtitleDate>Quedan</SubtitleDate> <CaloricValue>625 kcal</CaloricValue>
      <SubtitleDate>Cosumido</SubtitleDate>{' '}
      <CaloricValue>2175 kcal</CaloricValue>
      <SubtitleDate>Tasa diaria</SubtitleDate>{' '}
      <CaloricValue>2800 kcal</CaloricValue>
      <SubtitleDate>n% de lo normal</SubtitleDate>{' '}
      <CaloricValue>78%</CaloricValue>
    </Container>
  );
};

export default DateComponnet;
