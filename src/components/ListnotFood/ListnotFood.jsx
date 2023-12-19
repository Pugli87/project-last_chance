import React from 'react';
import { Container, Textfood, Constant } from './FoodStyled';

const ListNotFood = () => {
  const alimentosNoRecomendados = [
    'Producto de harina',
    'Leche',
    'Carne roja',
    'Carne ahumada',
  ];

  return (
    <Container>
      <Textfood>Alimentos no recomendados</Textfood>

      {alimentosNoRecomendados.map((alimento, index) => (
        <Constant key={index}>{alimento}</Constant>
      ))}
    </Container>
  );
};

export default ListNotFood;
