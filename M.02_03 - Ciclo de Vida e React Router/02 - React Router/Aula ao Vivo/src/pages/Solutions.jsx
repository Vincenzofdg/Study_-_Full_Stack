import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Solutions({ solutions }) {
  return (
    <section>
      <ul>
        {solutions.map((solution) => (
          <li key={ solution.id }>
            <Link className="link-solution" to={ `solutions/${solution.id}` }>{solution.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Solutions;
