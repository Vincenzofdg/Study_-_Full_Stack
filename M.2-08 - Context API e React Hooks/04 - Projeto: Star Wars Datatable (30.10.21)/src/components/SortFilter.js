import React, { useContext, useState } from 'react';
import SWContext from '../context/SWContext';
import '../Styles/SortFilter.css';

import { ALL_CATEGORIES as categories } from '../info';

function SortFilter() {
  const [column, setColumn] = useState('Name');
  const { filters, setFilters, sortMethod, setSortMethod } = useContext(SWContext);

  const onButtonClick = () => {
    setFilters({
      ...filters,
      order: {
        sort: sortMethod,
        column,
      },
    });
  };

  return (
    <div className="sortFilter">
      <label htmlFor="categories">
        <select
          name="categories"
          data-testid="column-sort"
          onChange={ (e) => setColumn(e.target.value.toLowerCase()) }
          className="selectElement"
        >
          { categories.map((cat) => (
            <option
              key={ `${cat}_sort` }
              value={ cat.replace(' ', '_').toLowerCase() }
            >
              { cat }
            </option>
          )) }
        </select>
      </label>
      <label htmlFor="sortMethodASC">
        <input
          data-testid="column-sort-input-asc"
          type="radio"
          name="sortMethodASC"
          value="ASC"
          checked={ sortMethod === 'ASC' }
          onChange={ (e) => setSortMethod(e.target.value) }
        />
        Ascendente
      </label>
      <label htmlFor="sortMethodDESC">
        <input
          data-testid="column-sort-input-desc"
          type="radio"
          name="sortMethodDESC"
          value="DESC"
          checked={ sortMethod === 'DESC' }
          onChange={ (e) => setSortMethod(e.target.value) }
        />
        Descendente
      </label>
      <button type="button" data-testid="column-sort-button" onClick={ onButtonClick }>
        Ordenar
      </button>
    </div>
  );
}

export default SortFilter;
