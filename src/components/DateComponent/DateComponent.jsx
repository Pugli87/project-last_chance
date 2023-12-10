import React from 'react';
import { Container, Title, SubtitleDate, CaloricValue,SubtitleContainer } from './DateStyled';

const DateComponent = () => {
  return (
    <Container>
      <Title>Resumen para el 13.08.2023</Title>
      <SubtitleContainer>
        <SubtitleDate>Quedan</SubtitleDate>
        <CaloricValue>625 kcal</CaloricValue>
      </SubtitleContainer>
      <SubtitleContainer>
        <SubtitleDate>Consumido</SubtitleDate>
        <CaloricValue>2175 kcal</CaloricValue>
      </SubtitleContainer>
      <SubtitleContainer>
        <SubtitleDate>Tasa diaria</SubtitleDate>
        <CaloricValue>2800 kcal</CaloricValue>
      </SubtitleContainer>
      <SubtitleContainer>
        <SubtitleDate>n% de lo normal</SubtitleDate>
        <CaloricValue>78%</CaloricValue>
      </SubtitleContainer>
    </Container>
  );
};

export default DateComponent;

