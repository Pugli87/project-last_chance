import React from 'react';
import {Text,ProductList,ProductItem} from './ProductStyled'
const ProductNameComponent = () => {
  const products = ['berenjena', 'carne de res', 'pan', 'nuez', 'carne de cerdo'];

  return (
    <div>
      <Text>Ingresa el nombre del producto</Text>
      <ProductList>
        {products.map((product, index) => (
          <ProductItem key={index}>{product}</ProductItem>
        ))}
      </ProductList>
    </div>
  );
};

export default ProductNameComponent;