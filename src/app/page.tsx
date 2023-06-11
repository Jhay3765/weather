import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [theme, currentTheme] = useState("");
  return (
    <main className={styles.parent}>
      <section className={styles.containerLeft}>
        <section className={styles.containerLeftInner}>
          <div className={styles.header}>
            <img src="/cloud.png" className={styles.mainWeather} />
            <button>Change Theme</button>
            <div className={styles.tempToggle}>
              <p>C</p>
              <p>F</p>
            </div>
          </div>
          <div className={styles.currentWeather}>
            <div className={styles.currentTemp}>26</div>
            <div className={styles.cOrF}>C</div>
          </div>

          <div className={styles.date}>14th Mar 22</div>
          <div className={styles.dayAndTime}>
            <p className={styles.day}>Monday</p>
            <p className={styles.time}>10:40 AM</p>
          </div>
          <div className={styles.weatherConditions}>
            <section className={styles.wind}>
              <img src="arrow.png" />
              <p>Wind</p>
              <p>10 km/h</p>
            </section>
            <div className={styles.verticalLine}> </div>
            <section className={styles.humidity}>
              <img src="rainDrop.png" />
              <p>Hum</p>
              <p>10 km/h</p>
            </section>
            <div className={styles.verticalLine}> </div>

            <section className={styles.rain}>
              <img src="smallCloud.png" />
              <p>Rain</p>
              <p>10 km/h</p>
            </section>
          </div>
          <div>
            <div className={styles.cardContainer}>
              <p>25*C</p>
              <img src="mediumCloud.png" />
              <p>Tue</p>
            </div>
          </div>
        </section>
      </section>
      <section className={styles.containerRight}></section>
    </main>
  );
}
