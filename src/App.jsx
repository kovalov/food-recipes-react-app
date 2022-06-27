import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MyHeader from './components/MyHeader';
import Home from './pages/Home';
import Recipes from './pages/Recipes';

const categoryImages = [
  { title: 'breakfast', src: 'src/images/breakfast-640.jpg' },
  { title: 'dessert', src: 'src/images/dessert-640.jpg' },
  { title: 'lunch', src: 'src/images/lunch-640.jpg' },
  { title: 'dinner', src: 'src/images/dinner-640.jpg' }
];

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3004/recipes')
      .then((response) => response.json())
      .then((data) => {
        const reduced = Object.entries(
          data.reduce((acc, { category }) => ((acc[category] = (acc[category] || 0) + 1), acc), {})
        ).map(([category, total], id) => ({ id, category, total }));

        //   setCategories(reduced);

        const categoriesWithImages = reduced.reduce((obj, item) => {
          const image = categoryImages.find((i) => i.title === item.category);
          return [...obj, { ...item, src: image.src }];
        }, []);

        setCategories(categoriesWithImages);
      });
  }, []);

  return (
    <Router>
      <MyHeader title="Recipes App" />
      <Switch>
        <Route exact path="/">
          <Home categories={categories} />
        </Route>
        <Route exact path="/:category">
          <Recipes />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
