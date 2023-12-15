import {
  Form,
  Wrapper,
  ContainForm,
  InputGramos,
  LabelGramos,
  Button,
} from './DailyIntakeStyled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/thunks';
import { useEffect, useState } from 'react';
import SaludSelect from 'components/Selects/SaludSelect';

const DailyIntake = () => {
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.auth.products);

  useEffect(() => {
    if (products.length > 0) {
      const newOptions = products.map((product) => ({
        id: product.id,
        value: product.title,
        label: product.title,
      }));
      setOptions(newOptions);
    }
  }, [products]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const searchProduct = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <Form>
        <ContainForm>
          <Wrapper>
            <SaludSelect options={options} isSearchable isClearable placeholder='Ingresa el nombre del producto' />
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
