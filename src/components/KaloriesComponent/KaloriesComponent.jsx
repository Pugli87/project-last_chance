import React, { useState } from 'react';
import {
  CaloriesList,
  CaloriesItem,
  Container,
  DeleteButton,
} from './KaloriesStyled';

const KaloriesComponent = () => {
  const [calorieValues, setCalorieValues] = useState([
    '320kcal',
    '480kcal',
    '210kcal',
    '205kcal',
    '580kcal',
  ]);

  const handleDelete = (index) => {
    const newCalorieValues = [...calorieValues];
    newCalorieValues.splice(index, 1);
    setCalorieValues(newCalorieValues);
  };

  return (
    <Container>
      <CaloriesList>
        {calorieValues.map((calorie, index) => (
          <CaloriesItem key={index}>
            <span>{calorie}</span>
            <DeleteButton onClick={() => handleDelete(index)}>x</DeleteButton>
          </CaloriesItem>
        ))}
      </CaloriesList>
    </Container>
  );
};

export default KaloriesComponent;

  