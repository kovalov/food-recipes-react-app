import { useParams } from 'react-router-dom';

function RecipesItem() {
  const { title } = useParams();

  console.log(title);

  return <div>RecipesItem, {title}</div>;
}

export default RecipesItem;
