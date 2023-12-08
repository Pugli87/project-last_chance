import React from 'react'
import GramosComponent from '../../GramosComponent/GramosComponent';
import ButtonComponent from '../../ButtonComponent/ButtonComponent';
import ProductNameComponent from '../../ProductNameComponent/ProductName';
import KaloriesComponent from '../../KaloriesComponent/KaloriesComponent';
import ListnotFood from 'components/ListnotFood/ListnotFood';
import { Container } from './DiaryStyled';
import DateComponnet from 'components/DateComponent/DateComponent';



const Diary = () => {
  return (
    <Container >
    <h1>13.08.2023</h1>
    <ProductNameComponent />
    <GramosComponent />
    <ButtonComponent />
    <KaloriesComponent />
    <ListnotFood/>
    <DateComponnet/>
  </Container>
  )
}

export default Diary


