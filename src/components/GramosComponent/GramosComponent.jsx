import React from 'react';
import { GramosText, GramosList, GramosItem,Container  } from './GramoStyled'; 


  const GramosComponent = () => {
    const elementos100g = Array(5).fill('100g');
  
    return (
      <Container>
        <GramosText>Gramos</GramosText>
        <GramosList>
          {elementos100g.map((elemento, index) => (
            <GramosItem key={index}>{elemento}</GramosItem>
          ))}
        </GramosList>
      </Container>
    );
  };
  
export default GramosComponent;

 