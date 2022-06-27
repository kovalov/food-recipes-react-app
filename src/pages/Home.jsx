import MyCategories from '../components/MyCategories';

function Home({ categories }) {
  return (
    <div>
      <MyCategories items={categories} />
    </div>
  );
}

export default Home;
