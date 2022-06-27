import styles from './MyCard.module.css';

function MyCard({ src, title, quantity }) {
  return (
    <div className={styles.myCard}>
      {/* <img src={src} alt="" className={styles.myCardImage} /> */}
      <h2 className={styles.myCardTitle}>{title}</h2>
      {/* <p className={styles.myCardQuantity}>{quantity}</p> */}
    </div>
  );
}

export default MyCard;
