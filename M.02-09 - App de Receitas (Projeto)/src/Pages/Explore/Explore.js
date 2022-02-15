import React from 'react';
import { useHistory } from 'react-router-dom';

import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

export default function Explore() {
  const { push } = useHistory();

  const redirect = ({ target: { name } }) => {
    push(`/explorar/${name}`);
  };

  return (
    <>
      <Header title="Explorar" />
      <button
        type="button"
        name="comidas"
        data-testid="explore-food"
        onClick={ (e) => { redirect(e); } }
      >
        Explorar Comidas
      </button>
      <button
        type="button"
        name="bebidas"
        data-testid="explore-drinks"
        onClick={ (e) => { redirect(e); } }
      >
        Explorar Bebidas
      </button>
      <Footer />
    </>
  );
}
