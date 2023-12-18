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
import { useEffect, useState } from 'react';
import SaludSelect from 'components/Selects/SaludSelect';
import './DailyIntake.scss'
import { globalIcons } from 'assets/icons/globalIcons';

const DailyIntake = () => {
  const [options, setOptions] = useState([]);
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [openSelectCategory, setOpenSelectCategory] = useState(false);
  const [category, setCategory] = useState('meat');

  const dispatch = useDispatch();
  const products = useSelector(state => state.auth.products);
  const categories = [
    {
      id: 0,
      name: 'Lacteos',
      category: 'dairy',
    },
    {
      id: 0,
      name: 'Carnes',
      category: 'meat',
    },
    {
      id: 0,
      name: 'Huevos',
      category: 'eggs',
    },
    {
      id: 0,
      name: 'Harinas',
      category: 'flour',
    },
  ]

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

  const categoryClick = (item) => {
    setCategory(item.category) 
    setOpenSelectCategory(false)
  };
  
  useEffect(() => {
    dispatch(fetchProducts(category));
  }, [category, dispatch]);

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
            <div className={` ${openSelectCategory ? '' : 'hide'} bakcdrop`} onClick={()=>setOpenSelectCategory(false)}></div>
            <div className="search">
                  <div className="search-menu">
                      <button type="button" className="search__button-filter" onClick={()=>setOpenSelectCategory(!openSelectCategory)}>
                        <span>Elije una categoria</span>
                          <img src={globalIcons.arrowUp} alt="arrow Up icon" className={`${openSelectCategory ? 'rotate-180' : ''}`}/>
                      </button>
                      <ul className={ `${ openSelectCategory ? '' : 'invisibility' } search__filter-menu`}>
                          { categories.map(category => <li onClick={()=>categoryClick(category)} className="search_filter-item">{category.name}</li>)}
                      </ul>
                  </div>
            </div>
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
