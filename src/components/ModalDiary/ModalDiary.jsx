import React, { useEffect, useState } from 'react';
import {
  Form,
  FormText,
  Wrapper,
  ContainForm,
  InputGramos,
  LabelGramos,
  Button,
  Box,
} from './ModalDiaryStyled';
import SelectCategory from '../../components/Selects/SelectCategory/SelectCategory';
import SaludSelect from '../../components/Selects/SalusSelect/SaludSelect';
import { useSelector } from 'react-redux';

const ModalDiary = ({ onSubmit, onAddItem }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [options, setOptions] = useState([]);

  const products = useSelector(state => state.auth.products);

  const handleSubmit = event => {
    event.preventDefault();
    const newItem = { name, number };
    onAddItem(newItem);
    setName('');
    setNumber('');
  };

  const productSelected = selectedOption => {
    setName(selectedOption?.label || '');
  };

  useEffect(() => {
    if (products?.length > 0) {
      const newOptions = products.map(product => ({
        id: product.id,
        value: product.title,
        label: product.title,
      }));
      setOptions(newOptions);
    }
  }, [products]);

  return (
    <Box>
      <Form onSubmit={handleSubmit} className="form">
        <ContainForm>
          <Wrapper className="input-group">
            <SelectCategory />
            <SaludSelect
              value={{ label: name, value: name }}
              handleChange={productSelected}
              options={options}
              isSearchable
              isClearable
              placeholder="Ingresa el nombre del producto"
            />
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
          Add
        </Button>
      </Form>
    </Box>
  );
};
export default ModalDiary;