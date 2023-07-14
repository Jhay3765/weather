import styles from "../page.module.css";
type weatherData = {
  temp: number;
  day: string;
};
export const Card = (params: weatherData) => {
  return (
    <div className={styles.card}>
      <p>{params.temp} &deg;F</p>
      <img src="mediumCloud.png" />
      <p>{params.day}</p>
    </div>
  );
};
