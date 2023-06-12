import styles from "../page.module.css";

export const Card = () => {
  return (
    <div className={styles.card}>
      <p>25*C</p>
      <img src="mediumCloud.png" />
      <p>Tue</p>
    </div>
  );
};
