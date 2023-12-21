import React from 'react';
import { Container, Textfood, Constant, Wrapper } from './FoodStyled';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';

const ListNotFood = () => {
  const user = useSelector(state => state.auth.currentUser);
  const loading = useSelector(state => state.auth.isLoading);

  const FoodsNotRecommended = [
    {name: 'Azucares'},
    {name: 'Cereales'},
    {name: 'Harina'},
    {name: 'Huevos'},
  ]

  return (
    <Container>
      <Textfood>Alimentos no recomendados</Textfood>

      <Wrapper>
      {FoodsNotRecommended.map((food, index) => (
          <>
            {loading ? <Loader key={index} variant='points'/> : <Constant key={index}>{food.name}</Constant>}
          </>
          ))}
        </Wrapper>
    </Container>
  );
};

export default ListNotFood;
