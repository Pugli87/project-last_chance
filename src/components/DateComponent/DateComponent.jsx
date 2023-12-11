import React from 'react';
import { Container, Title, SubtitleDate, CaloricValue } from './DateStyled';
/*
const DateComponnet = () => {
  return (
    <Container>
      <Title>Resumen para el 13.08.2023</Title>
      <ul>
        <li>
          <h3></h3>
          <p id="parragraph"></p>
        </li>
        <li>
          <h3></h3>
          <p id="parragraph"></p>
        </li>
        <li>
          <h3></h3>
          <p id="parragraph"></p>
        </li>
        <li>
          <h3></h3>
          <p id="parragraph"></p>
        </li>
      </ul>
      <SubtitleDate>Quedan</SubtitleDate> <CaloricValue>625 kcal</CaloricValue>
      <SubtitleDate>Cosumido</SubtitleDate> <CaloricValue>2175 kcal</CaloricValue>
      <SubtitleDate>Tasa diaria</SubtitleDate> <CaloricValue>2800 kcal</CaloricValue>
      <SubtitleDate>n% de lo normal</SubtitleDate> <CaloricValue>78%</CaloricValue>
    </Container>
  );
};*/
const DateComponnet = () => {
  return (
    <Container>
      <Title>Resumen para el 13.08.2023</Title>
      <ul>
        <li>
          {' '}
          {/*display: flex; justify-content: space-between; */}
          <h3>Quedan</h3>
          <p id="parragraph">625 kcal</p>
        </li>
        <li>
          <h3>Cosumido</h3>
          <p id="parragraph">2175 kcal</p>
        </li>
        <li>
          <h3>Tasa diaria</h3>
          <p id="parragraph">2800 kcal</p>
        </li>
        <li>
          <h3>n% de lo normal</h3>
          <p id="parragraph">78%</p>
        </li>
      </ul>
    </Container>
  );
};

export default DateComponnet;
