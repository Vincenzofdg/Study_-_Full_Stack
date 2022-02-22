import React from 'react';
import PropTypes from 'prop-types';

import RecommendationCard from './Cards/RecommendationCard';

export default function RecommendationsMap({ recommendationsList }) {
  return (
    <div className="container">
      {recommendationsList && recommendationsList.map((recipe, i) => (
        <RecommendationCard recipe={ recipe } i={ i } key={ i } />
      ))}
    </div>
  );
}

RecommendationsMap.propTypes = {
  recommendationsList: PropTypes.arrayOf(PropTypes.any).isRequired,
};
