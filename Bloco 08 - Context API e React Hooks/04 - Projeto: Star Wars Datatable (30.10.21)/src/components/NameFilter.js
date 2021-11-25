import React, { useState, useContext, useEffect } from 'react';
import SWContext from '../context/SWContext';
import '../Styles/NameFilter.css';

function NameFilter() {
  const { filters, setFilters } = useContext(SWContext);
  const [name, setName] = useState('');

  useEffect(() => {
    setFilters({ ...filters, filterByName: name.toLowerCase() });
  }, [name]);

  return (
    <div className="nameFilter">
      <label htmlFor="search">
        <input
          className="nameInput"
          name="search"
          type="text"
          value={ name }
          onChange={ (e) => setName(e.target.value) }
          placeholder="Filtrar por nome"
          data-testid="name-filter"
        />
      </label>
    </div>
  );
}

export default NameFilter;
