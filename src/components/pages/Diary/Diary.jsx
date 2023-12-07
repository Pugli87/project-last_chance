import React from 'react'
import GramosComponent from '../../GramosComponent/GramosComponent';
import ButtonComponent from '../../ButtonComponent/ButtonComponent';
import ProductNameComponent from '../../ProductNameComponent/ProductName';
import KaloriesComponent from '../../KaloriesComponent/KaloriesComponent';
import { Container } from './DiaryStyled';


const Diary = () => {
  return (
    <Container >
    <h1>13.08.2023</h1>
    <ProductNameComponent />
    <GramosComponent />
    <ButtonComponent />
    <KaloriesComponent />
  </Container>
  )
}

export default Diary


