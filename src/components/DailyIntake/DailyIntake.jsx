import React, { useEffect, useState } from 'react';
import {
  Form,
  FormText,
  Wrapper,
  ContainForm,
  InputGramos,
  LabelGramos,
  Button,
} from './DailyIntakeStyled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/thunks';
import SaludSelect from 'components/Selects/SaludSelect';

const DailyIntake = ({ onSubmit, selectedDate, selectedProducts }) => {
  const [options, setOptions] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const products = useSelector(state => state.auth.products);

  useEffect(() => {
    if (products.length > 0) {
      const newOptions = products.map(product => ({
        id: product.id,
        value: product.title,
        label: product.title,
      }));
      setOptions(newOptions);
    }
  }, [products]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSubmit = event => {
    event.preventDefault();
    if (!name || !number) return;

    const updatedItems = [...selectedProducts[selectedDate], { name, number }];
    onSubmit(updatedItems);
    setName('');
    setNumber('');
  };

  const handleDelete = index => {
    const updatedItems = selectedProducts[selectedDate].filter(
      (item, i) => i !== index
    );
    onSubmit(updatedItems);
  };

  const productSelected = selectedOption => {
    setName(selectedOption?.label || '');
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="form">
        <ContainForm>
          <Wrapper>
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
          +
        </Button>
      </Form>
      <FormText>
        <ul className="formList">
          {(selectedProducts[selectedDate] ?? []).map((item, index) => (
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
