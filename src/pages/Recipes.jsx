import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from 'react-router-dom';

import { useState, useEffect } from 'react';

import RecipesItem from './RecipesItem';

import MyContainer from '../components/MyContainer';
import MyCard from '../components/MyCard';

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  const match = useRouteMatch();

  const { category } = useParams();

  const path = `http://localhost:3004/recipes?category=${category}`;

  useEffect(() => {
    fetch(path)
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div>
      <MyContainer>
        {recipes.length &&
          recipes.map((item) => (
            <Link key={item.id} to={`${match.url}/${item.title}-${item.id}`}>
              <MyCard title={item.title} />
            </Link>
          ))}
      </MyContainer>
      <Switch>
        <Route exact path={`${match.path}/:title`}>
          <RecipesItem />
        </Route>
      </Switch>
    </div>
  );
}

export default Recipes;
