//import React, { useState } from 'react';
import {
  Form,
  Wrapper,
  ContainForm,
  Label,
  InputGramos,
  LabelGramos,
  Input,
  Button,
} from './DailyIntakeStyled';
const DailyIntake = () => {
  /*  const [productName, setProductName] = useState('');
  const products = [
    'berenjena',
    'carne de res',
    'pan',
    'nuez',
    'carne de cerdo',
  ];
  const handleInputChange = event => {
    setProductName(event.target.value);
  };*/
  return (
    <div>
      <Form>
        <ContainForm>
          <Wrapper>
            <Label>
              Ingresa el nombre del producto
              <Input type="text" required />
            </Label>
          </Wrapper>
          <Wrapper>
            <LabelGramos>
              Gramos
              <InputGramos type="text" required />
            </LabelGramos>
          </Wrapper>
        </ContainForm>
        <Button type="submit">+</Button>
      </Form>
    </div>
  );
};
export default DailyIntake;