import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import { LocalStorageContext } from '../Context/LocalStorageProvider';
import ShareButton from '../Components/Buttons/ShareButton';

export default function DoneRecipes() {
  const {
    values: { doneRecipes: { doneToRender } },
    methods: { filterRecipesDone },
  } = useContext(LocalStorageContext);

  return (
    <div>
      <Header showSearchBtn="" title="Receitas Feitas" />
      <section>
        <button
          className="buttons"
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => filterRecipesDone('all') }
        >
          All
        </button>
        <button
          className="buttons"
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ () => filterRecipesDone('comida') }
        >
          Food
        </button>
        <button
          className="buttons"
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => filterRecipesDone('bebida') }
        >
          Drink
        </button>
      </section>
      {
        doneToRender.length !== 0 ? doneToRender.map((item, index) => {
          if (item.type === 'comida') {
            return (
              <section className="recipes-done" key={ item.id }>
                <Link to={ `/comidas/${item.id}` }>
                  <img
                    width="200px"
                    data-testid={ `${index}-horizontal-image` }
                    alt="recipe"
                    src={ item.image }
                  />
                </Link>
                <section>
                  <ShareButton
                    index={ index }
                    type="comidas"
                    id={ item.id }
                  />
                  <Link to={ `/comidas/${item.id}` }>
                    <h4 data-testid={ `${index}-horizontal-name` }>{ item.name }</h4>
                  </Link>
                  <p data-testid={ `${index}-horizontal-top-text` }>
                    { `${item.area} - ${item.category}` }
                  </p>
                  <b />
                  <p data-testid={ `${index}-horizontal-done-date` }>{ item.doneDate }</p>
                  <b />
                  <p>
                    { item.tags.map((itemTag, indexTag) => (
                      <span
                        data-testid={ `${index}-${itemTag}-horizontal-tag` }
                        key={ indexTag }
                      >
                        { itemTag }
                      </span>
                    ))}
                  </p>
                </section>
              </section>
            );
          }
          return (
            <section className="recipes-done" key={ item.id }>
              <Link to={ `/bebidas/${item.id}` }>
                <img
                  width="200px"
                  data-testid={ `${index}-horizontal-image` }
                  alt="recipe"
                  src={ item.image }
                />
              </Link>
              <section>
                <ShareButton
                  index={ index }
                  type="comidas"
                  id={ item.id }
                />
                <Link to={ `/bebidas/${item.id}` }>
                  <h4 data-testid={ `${index}-horizontal-name` }>{ item.name }</h4>
                </Link>
                <p
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  { item.alcoholicOrNot }
                </p>
                <b />
                <p data-testid={ `${index}-horizontal-done-date` }>{ item.doneDate }</p>
              </section>
            </section>
          );
        }) : null
      }
    </div>
  );
}
