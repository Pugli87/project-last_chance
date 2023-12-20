import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../../redux/thunks';
import { globalIcons } from '../../../assets/icons/globalIcons';
import './SelectCategory.scss'

function SelectCategory() {
    const [openSelectCategory, setOpenSelectCategory] = useState(false);
    const [category, setCategory] = useState('');

    const dispatch = useDispatch()
    const categories = [
        {
          id: 0,
          name: 'Lacteos',
          category: 'dairy',
        },
        {
          id: 1,
          name: 'Carnes',
          category: 'meat',
        },
        {
          id: 2,
          name: 'Huevos',
          category: 'eggs',
        },
        {
          id: 3,
          name: 'Harinas',
          category: 'flour',
        },
        {
            id: 4,
            name: 'Cereales',
            category: 'cereals',
          },
      ];
    
    const categoryClick = item => {
        setCategory(item);
        setOpenSelectCategory(false);
      };
    
      useEffect(() => {
        dispatch(fetchProducts(category?.category || 'meat'));
      }, [category, dispatch]);

  return (
    <>
        <div
          className={` ${openSelectCategory ? '' : 'hide'} bakcdrop`}
          onClick={() => setOpenSelectCategory(false)}
        ></div>
        <div className="search">
          <div className="search-menu">
            <button
              type="button"
              className="search__button-filter"
              onClick={() => setOpenSelectCategory(!openSelectCategory)}
            >
              <span>{ category?.name ? category.name : 'Categorias' }</span>
              <img
                src={globalIcons.arrowUp}
                alt="arrow Up icon"
                className={`${openSelectCategory ? 'rotate-180' : ''}`}
              />
            </button>
            <ul
              className={`${
                openSelectCategory ? '' : 'invisibility'
              } search__filter-menu`}
            >
              {categories.map(item => (
                <li
                  key={item.id}
                  onClick={() => categoryClick(item)}
                  className={`search_filter-item ${item?.name === category?.name ? '-active' : ''}`}
                >
                  {item?.name || ''}
                </li>
              ))}
            </ul>
          </div>
        </div>
    </>
  )
}

export default SelectCategory