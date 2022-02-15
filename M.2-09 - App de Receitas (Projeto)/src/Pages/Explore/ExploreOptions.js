import React from 'react';
import PropTypes from 'prop-types';

import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import ExploreByIngredientsButton
  from '../../Components/Buttons/Explore/ExploreByIngredientsButton';
import ExploreByAreaButton from '../../Components/Buttons/Explore/ExploreByAreaButton';
import SurpriseMeButton from '../../Components/Buttons/Explore/SurpriseMeButton';

export default function ExploreOptions({ location: { pathname } }) {
  const type = pathname.split('/')[2];
  const title = type === 'comidas' ? 'Explorar Comidas' : 'Explorar Bebidas';

  return (
    <>
      <Header title={ title } showSearchBtn="" />
      <ExploreByIngredientsButton type={ type } />
      <ExploreByAreaButton type={ type } />
      <SurpriseMeButton type={ type } />
      <Footer />
    </>
  );
}

ExploreOptions.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};
