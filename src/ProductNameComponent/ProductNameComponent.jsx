import React, { useState } from 'react';
import {  ProductList, ProductItem ,StyledInput, Container} from './ProductNameStyled';

const ProductNameComponent = () => {
  const [productName, setProductName] = useState('');
  const products = ['berenjena', 'carne de res', 'pan', 'nuez', 'carne de cerdo'];

  const handleInputChange = (event) => {
    setProductName(event.target.value);
  };
  return (
    <Container>
      <StyledInput
        type="text"
        value={productName}
        onChange={handleInputChange}
        placeholder="Ingresa el nombre del producto"
      />
      <ProductList>
        {products.map((product, index) => (
          <ProductItem key={index}>{product}</ProductItem>
        ))}
      </ProductList>
    </Container>
    );
  };
  
  export default ProductNameComponent; 