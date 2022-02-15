import React from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';

export default function ExploreByAreaButton({ type }) {
  const { push } = useHistory();

  if (type === 'bebidas') return null;

  return (
    <button
      type="button"
      data-testid="explore-by-area"
      onClick={ () => { push(`/explorar/${type}/area`); } }
    >
      Por Local de Origem
    </button>
  );
}

ExploreByAreaButton.propTypes = {
  type: PropTypes.string.isRequired,
};
