import { Link } from 'react-router-dom';

import styles from './MyHeader.module.css';

import MyContainer from './MyContainer';

function MyHeader({ title }) {
  return (
    <header className={styles.myHeader}>
      <MyContainer>
        <Link to="/">
          <span className={styles.myHeaderTitle}>{title}</span>
        </Link>
      </MyContainer>
    </header>
  );
}

export default MyHeader;
