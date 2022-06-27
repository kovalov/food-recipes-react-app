import { Link } from 'react-router-dom';

import styles from './MyCategories.module.css';

import MyContainer from './MyContainer';
import MyCard from './MyCard';

function MyCategories({ items }) {
  return (
    <main className={styles.myCategories}>
      <MyContainer>
        {items.length &&
          items.map((item) => (
            <Link key={item.id} to={`/${item.category}`}>
              <MyCard title={item.category} />
            </Link>
          ))}
      </MyContainer>
    </main>
  );
}

export default MyCategories;
