import {
  Form,
  Wrapper,
  ContainForm,
  InputGramos,
  LabelGramos,
  Button,
  ListItem,
  ScrollableFormText,
  Name, 
  Grams, 
  Kcal,
} from './DailyIntakeStyled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/thunks';
import { useEffect, useState } from 'react';
import SaludSelect from 'components/Selects/SaludSelect';

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

const DailyIntake = () => {
  const [options, setOptions] = useState([]);
  const [items, setItems] = useLocalStorage('items', []);
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
    setItems([...items, { name, number }]);
    setName(null);
    setNumber(null);
  };

  const handleDelete = index => {
    setItems(items.filter((item, i) => i !== index));
  };

  const productSelected = e => {
    setName(e?.value || '');
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="form">
        <ContainForm>
          <Wrapper>
            <SaludSelect
              defaultValue={name?.value}
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
      <ScrollableFormText>
        <ul className="formList">
          {items.map((item, index) => (
          <ListItem className="listForm" key={index}>
            <Name>{item.name}</Name>
            <Grams>{item.number} g</Grams>
            <Kcal>{parseInt(item.number, 10) + 10} kcal</Kcal>
            <button className="btnDelete" onClick={() => handleDelete(index)}>x</button>
          </ListItem>
          ))}
        </ul>
      </ScrollableFormText>
    </div>
  );
};
export default DailyIntake;
