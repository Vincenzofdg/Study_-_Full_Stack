import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SWContext from './SWContext';
import { NUMERIC_CATEGORIES, INITIAL_FILTERS } from '../info';

function SWProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState();
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [categories, setCategories] = useState(NUMERIC_CATEGORIES);
  const [sortMethod, setSortMethod] = useState('ASC');

  const ONE = 1;

  const sortCategoryASC = (type, newData) => {
    const { order: { column } } = filters;
    if (type === 'name') {
      return setFilteredData(newData.sort((a, b) => (
        (a[column] > b[column]) ? ONE : -ONE)));
    }
    return setFilteredData(newData.sort((a, b) => (
      (Number(a[column]) > Number(b[column])) ? ONE : -ONE)));
  };

  const sortCategoryDESC = (type, newData) => {
    const { order: { column } } = filters;
    if (type === 'name') {
      return setFilteredData(newData.sort((a, b) => (
        (a[column] < b[column]) ? ONE : -ONE)));
    }
    return setFilteredData(newData.sort((a, b) => (
      (Number(a[column]) < Number(b[column])) ? ONE : -ONE)));
  };

  const sortData = (newData) => {
    const { order: { sort, column } } = filters;
    if (sort === 'ASC') {
      if (column === 'name'
      || column === 'url'
      || column === 'climate'
      || column === 'terrain') {
        return sortCategoryASC('name', newData);
      }
      return sortCategoryASC('', newData);
    }
    if (column === 'name' || column === 'url') {
      return sortCategoryDESC('name', newData);
    }
    return sortCategoryDESC('', newData);
  };

  const fetchData = async () => {
    const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    try {
      setIsLoading(true);
      const newData = await (await fetch(URL)).json();
      delete newData.residents;
      setData(newData.results);
      setFilteredData(newData.results);
      setIsLoading(false);
    } catch (error) {
      setErrorMsg(error);
    }
  };

  const resetFilters = () => {
    setFilters(INITIAL_FILTERS);
    setCategories(NUMERIC_CATEGORIES);
  };

  const updateCategories = () => {
    let updatedCategories = NUMERIC_CATEGORIES;
    const { filterByNumericValues } = filters;
    if (filterByNumericValues.length > 0) {
      filterByNumericValues.forEach(({ column }) => {
        updatedCategories = updatedCategories.filter((cat) => cat !== column);
      });
    }
    setCategories(updatedCategories);
  };

  return (
    <SWContext.Provider
      value={ {
        data,
        filteredData,
        isLoading,
        fetchData,
        setFilters,
        filters,
        categories,
        sortMethod,
        setSortMethod,
        sortData,
        errorMsg,
        resetFilters,
        updateCategories,
      } }
    >
      {children}
    </SWContext.Provider>
  );
}

SWProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SWProvider;
