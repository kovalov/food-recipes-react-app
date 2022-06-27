import styles from './MyContainer.module.css';

function MyContainer({ children, className }) {
  return <div className={`${styles.myContainer} ${className}`}>{children}</div>;
}

export default MyContainer;
