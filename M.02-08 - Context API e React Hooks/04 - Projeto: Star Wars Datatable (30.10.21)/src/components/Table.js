import React, { useContext, useEffect } from 'react';
import SWContext from '../context/SWContext';
import { ALL_CATEGORIES } from '../info';
import '../Styles/Table.css';

function Table() {
  const { filteredData, sortData } = useContext(SWContext);

  useEffect(() => {
    sortData(filteredData);
  }, []);

  return (
    <section>
      <table>
        <thead>
          <tr>
            { ALL_CATEGORIES.map((cat) => <th key={ `${cat}_th` }>{ cat }</th>) }
          </tr>
        </thead>
        <tbody>
          { filteredData.map((planet) => (
            <tr key={ planet.name }>
              <td data-testid="planet-name">{ planet.name }</td>
              <td>{ planet.rotation_period }</td>
              <td>{ planet.orbital_period }</td>
              <td>{ planet.diameter }</td>
              <td>{ planet.climate}</td>
              <td>{ planet.gravity }</td>
              <td>{ planet.terrain }</td>
              <td>{ planet.surface_water }</td>
              <td>{ planet.population }</td>
              <td>{ planet.films }</td>
              <td>{ planet.created }</td>
              <td>{ planet.edited }</td>
              <td>{ planet.url }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Table;
