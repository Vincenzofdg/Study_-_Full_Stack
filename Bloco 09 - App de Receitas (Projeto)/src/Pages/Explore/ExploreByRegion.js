import React, { useEffect, useState, useContext } from 'react';

import { fetchMealRegionList } from '../../Helper';

import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import RecipeCard from '../../Components/Cards/RecipeCard';

import { RecipeContext } from '../../Context/RecipeProvider';

export default function ExploreByRegion() {
  const [regionList, setRegionList] = useState([]);

  const grabRegionList = async () => {
    const list = await fetchMealRegionList();
    setRegionList(list);
  };

  useEffect(() => {
    grabRegionList();
  }, []);

  const {
    values: { listToRender: { meals } },
    methods: { setListByArea },
  } = useContext(RecipeContext);

  const applyAreaFilter = ({ target: { value } }) => {
    setListByArea(value);
  };

  if (regionList === undefined) return null;
  if (regionList.length === 0) return null;

  return (
    <>
      <Header title="Explorar Origem" showSearchBtn="showSearchBtn" />
      <select
        data-testid="explore-by-area-dropdown"
        onChange={ (e) => applyAreaFilter(e) }
      >
        <option
          value="All"
          data-testid="All-option"
        >
          All
        </option>
        {regionList.map(({ strArea }) => (
          <option
            data-testid={ `${strArea}-option` }
            key={ strArea }
            value={ strArea }
          >
            { strArea }
          </option>
        ))}
      </select>
      {meals && meals.map((recipe, i) => (
        <RecipeCard key={ i } index={ i } recipe={ recipe } />))}
      <Footer />
    </>
  );
}
