import React from 'react';
import { Container, Title, SubtitleDate, CaloricValue } from './DateStyled';

const DateComponnet = () => {
  return (
    <Container>
      <Title>Resumen para el 13.08.2023</Title>
      <ul>
        <li>
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
