import React, { useState } from 'react';
import {
  Form,
  FormText,
  Wrapper,
  ContainForm,
  Label,
  InputGramos,
  LabelGramos,
  Input,
  Button,
} from './DailyIntakeStyled';
const DailyIntake = () => {
  /*const [productName, setProductName] = useState('');
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
  //const [date, setDate] = useState(new Date());
  //const [showCalendar, setShowCalendar] = useState(false);
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    setItems([...items, { name, number }]);
    setName('');
    setNumber('');
  };

  const handleDelete = index => {
    setItems(items.filter((item, i) => i !== index));
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="form">
        <ContainForm>
          <Wrapper className="input-group">
            <Label>
              Ingresa el nombre del producto
              <Input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </Label>
          </Wrapper>

          <Wrapper>
            <LabelGramos>
              Gramos
              <InputGramos
                type="text"
                value={number}
                onChange={e => setNumber(e.target.value)}
                onKeyPress={event => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                required
              />
            </LabelGramos>
          </Wrapper>
        </ContainForm>
        <Button className="btnSave" type="submit">
          +
        </Button>
      </Form>
      <FormText>
        <ul className="formList">
          {items.map((item, index) => (
            <li className="listForm" key={index}>
              {item.name} - {item.number} g - {parseInt(item.number, 10) + 10}{' '}
              kcal
              <button className="btnDelete" onClick={() => handleDelete(index)}>
                x
              </button>
            </li>
          ))}
        </ul>
      </FormText>
    </div>
  );
};
export default DailyIntake;
