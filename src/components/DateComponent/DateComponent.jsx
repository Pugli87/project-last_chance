import React from 'react';
import { Container, Title, SubtitleDate, CaloricValue, ContainerLi } from './DateStyled';

const DateComponnet = () => {
  return (
    <Container>
      <Title>Resumen para el 13.08.2023</Title>
      <ul>
        <ContainerLi >
          < SubtitleDate>Quedan</SubtitleDate>
          <CaloricValue id="parragraph">625 kcal</CaloricValue>
        </ContainerLi>
        <ContainerLi>
          <SubtitleDate>Cosumido</SubtitleDate>
          <CaloricValue id="parragraph">2175 kcal</CaloricValue>
        </ContainerLi>
        <ContainerLi>
          <SubtitleDate>Tasa diaria</SubtitleDate>
          <CaloricValue id="parragraph">2800 kcal</CaloricValue>
        </ContainerLi>
        <ContainerLi>
          <SubtitleDate>n% de lo normal</SubtitleDate>
          <CaloricValue id="parragraph">78%</CaloricValue>
        </ContainerLi>
      </ul>
    </Container>
  );
};

export default DateComponnet;
