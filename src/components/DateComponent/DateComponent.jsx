import React from 'react';
import { Container, Title, SubtitleDate, CaloricValue, Li } from './DateStyled';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';

const DateComponnet = () => {
  const userFromRedux = useSelector(state => state.auth.currentUser);
  const loading = useSelector(state => state.auth.isLoading);
  const user = {
    ...userFromRedux,
    missingCalories: loading
      ? userFromRedux.name
      : Math.floor(Math.random() * 500) + ' kcal',
    caloriesConsumed: loading
      ? userFromRedux.name
      : Math.floor(Math.random() * 2000) + ' kcal',
    totalCalories: loading
      ? userFromRedux.name
      : Math.floor(Math.random() * 2000) + ' kcal',
    percentage: loading
      ? userFromRedux.name
      : Math.floor(Math.random() * 100) + '%',
  };

  return (
    <Container>
      <Title>Resumen para el 13.08.2023</Title>
      <ul>
        <Li>
          <SubtitleDate>Quedan</SubtitleDate>
          <div>
            {loading ? (
              <Loader variant="points" />
            ) : (
              <CaloricValue id="missingCalories">
                {user.missingCalories}
              </CaloricValue>
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
                {user.caloriesConsumed}
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
              <CaloricValue id="totalsCalories">
                {user.totalCalories}
              </CaloricValue>
            )}
          </div>
        </Li>
        <Li>
          <SubtitleDate>N% de lo normal</SubtitleDate>
          <div>
            {loading ? (
              <Loader variant="points" />
            ) : (
              <CaloricValue id="percentage">{user.percentage}</CaloricValue>
            )}
          </div>
        </Li>
      </ul>
    </Container>
  );
};

export default DateComponnet;
