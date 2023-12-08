import React, { useState } from 'react';
import { GramosText, GramosList, GramosItem, Container } from './GramoStyled';

const GramosComponent = () => {
  const [gramosValue, setGramosValue] = useState('');
  const elementos100g = Array(5).fill('100g');

  const handleInputChange = (event) => {
    setGramosValue(event.target.value);
  };

  return (
    <Container>
      <GramosText
        type="text"
        value={gramosValue}
        onChange={handleInputChange}
        placeholder="Gramos"
    
      />
      <GramosList>
        {elementos100g.map((elemento, index) => (
          <GramosItem key={index}>{elemento}</GramosItem>
        ))}
      </GramosList>
    </Container>
  );
};

export default GramosComponent;


 