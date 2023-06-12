"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const themes = [
    "linear-gradient(243.18deg, #5CEBD1 0%, #1A2B2C 100%)",
    "linear-gradient(243.18deg, #0C05E7 0%, #9B2FCD 100%)",
    "linear-gradient(243.18deg, #BCC92D 0%, #48C1C9 100%)",
    "linear-gradient(243.18deg, #9065BC 0%, rgba(255, 0, 108, 0.38) 100%)",
    "linear-gradient(243.18deg, #1C565E 0%, #3DC7DA 100%)",
    "linear-gradient(243.18deg, #00C236 0%, #40B845 100%)",
  ];
  const [themeIndex, setThemeIndex] = useState(0);

  useEffect(() => {
    document.body.style.background = themes[themeIndex];
  }, [themeIndex]);

  const changeTheme = () => {
    setThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
  };
  return (
    <main className={styles.parent}>
      <section className={styles.containerLeft}>
        <section className={styles.containerLeftInner}>
          <div className={styles.header}>
            <img src="/cloud.png" className={styles.mainWeather} />
            <button onClick={changeTheme}>Change Theme</button>
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
