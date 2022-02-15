import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import RecipeProvider from './Context/RecipeProvider';
import LocalStorageProvider from './Context/LocalStorageProvider';

import Explore from './Pages/Explore/Explore';
import ExploreByIngredients from './Pages/Explore/ExploreByIngredients';
import ExploreByRegion from './Pages/Explore/ExploreByRegion';
import ExploreOptions from './Pages/Explore/ExploreOptions';

import Login from './Pages/Login';
import Profile from './Pages/Profile';

import RecipeDetails from './Pages/RecipeDetails';
import RecipeMainPage from './Pages/Main/RecipeMainPage';

import RecipeDone from './Pages/RecipeDone';
import RecipeFavorite from './Pages/RecipeFavorite';
import RecipeInProgress from './Pages/RecipeInProgress';

import NotFound from './Components/RouteNotFound';

function App() {
  return (
    <RecipeProvider>
      <LocalStorageProvider>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ (props) => <Login { ...props } /> }
            />
            <Route
              exact
              path="/comidas"
              render={ (props) => <RecipeMainPage { ...props } /> }
            />
            <Route
              exact
              path="/comidas/:id"
              render={ (props) => <RecipeDetails { ...props } /> }
            />
            <Route
              exact
              path="/comidas/:id/in-progress"
              render={ (props) => <RecipeInProgress { ...props } /> }
            />
            <Route
              exact
              path="/bebidas"
              render={ (props) => <RecipeMainPage { ...props } /> }
            />
            <Route
              exact
              path="/bebidas/:id"
              render={ (props) => <RecipeDetails { ...props } /> }
            />
            <Route
              exact
              path="/bebidas/:id/in-progress"
              render={ (props) => <RecipeInProgress { ...props } /> }
            />
            <Route
              exact
              path="/explorar"
              render={ (props) => <Explore { ...props } /> }
            />
            <Route
              exact
              path="/explorar/comidas"
              render={ (props) => <ExploreOptions { ...props } /> }
            />
            <Route
              exact
              path="/explorar/bebidas"
              render={ (props) => <ExploreOptions { ...props } /> }
            />
            <Route
              exact
              path="/explorar/comidas/ingredientes"
              render={ (props) => <ExploreByIngredients { ...props } /> }
            />
            <Route
              exact
              path="/explorar/bebidas/ingredientes"
              render={ (props) => <ExploreByIngredients { ...props } /> }
            />
            <Route
              exact
              path="/explorar/comidas/area"
              render={ (props) => <ExploreByRegion { ...props } /> }
            />
            <Route
              exact
              path="/perfil"
              render={ (props) => <Profile { ...props } /> }
            />
            <Route
              exact
              path="/receitas-feitas"
              render={ (props) => <RecipeDone { ...props } /> }
            />
            <Route
              exact
              path="/receitas-favoritas"
              render={ (props) => <RecipeFavorite { ...props } /> }
            />
            <Route
              path="/explorar/bebidas/area"
              component={ () => <NotFound /> }
            />
          </Switch>
        </BrowserRouter>
      </LocalStorageProvider>
    </RecipeProvider>
  );
}

export default App;
