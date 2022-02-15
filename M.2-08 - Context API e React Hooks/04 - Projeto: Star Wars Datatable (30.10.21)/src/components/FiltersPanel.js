import React, { useContext, useEffect } from 'react';
import NameFilter from './NameFilter';
import NumericFilter from './NumericFilter';
import SortFilter from './SortFilter';
import SWContext from '../context/SWContext';
import '../Styles/FiltersPanel.css';

function FiltersPanel() {
  const { resetFilters, filters, setFilters,
    updateCategories, data, sortData } = useContext(SWContext);

  const removeFilter = (category) => {
    setFilters({
      ...filters,
      filterByNumericValues: filters.filterByNumericValues.filter((f) => f.column
      !== category),
    });
  };

  useEffect(() => {
    let newData = [];
    function filterData() {
      const { filterByNumericValues } = filters;
      newData = data.filter((planet) => (
        (planet.name).toLowerCase()).includes(filters.filterByName));
      if (filterByNumericValues.length > 0) {
        filterByNumericValues.forEach(({ column, comparison, value }) => {
          switch (comparison) {
          case 'maior que':
            newData = newData.filter((planet) => Number(planet[column])
            > Number(value));
            break;
          case 'menor que':
            newData = newData.filter((planet) => Number(planet[column])
            < Number(value));
            break;
          case 'igual a':
            newData = newData.filter((planet) => Number(planet[column])
            === Number(value));
            break;
          default:
            break;
          }
        });
      }
    }
    filterData();
    sortData(newData);
    updateCategories();
  }, [filters]);

  return (
    <section>
      <NameFilter />
      <br />
      <div className="filtersBox">
        <NumericFilter />
        <button className="resetBtn" type="button" onClick={ resetFilters }>
          Resetar Filtros
        </button>
        <SortFilter />
      </div>
      <br />
      { filters.filterByNumericValues.length > 0
      && filters.filterByNumericValues.map(({ column, comparison, value }) => (
        <label data-testid="filter" key={ column } htmlFor={ column }>
          {`${column} ${comparison} ${value} `}
          <button
            id={ column }
            type="button"
            onClick={ () => removeFilter(column) }
          >
            X
          </button>
          <br />
        </label>
      ))}
      <br />
    </section>
  );
}

export default FiltersPanel;
