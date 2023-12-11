import React, { useState } from 'react';
import { ProductList, ProductItem, StyledInput } from './ProductStyled';

const ProductNameComponent = () => {
  const [productName, setProductName] = useState('');
  const products = [
    'berenjena',
    'carne de res',
    'pan',
    'nuez',
    'carne de cerdo',
  ];

  const handleInputChange = event => {
    setProductName(event.target.value);
  };
  return (
    <div>
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
    </div>
  );
};

export default ProductNameComponent;
