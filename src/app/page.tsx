"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
import { useState } from "react";
import { Card } from "./components/card";

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
          <div className={styles.cardContainer}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <img src="More.png" />
          </div>
        </section>
      </section>
      <section className={styles.containerRight}>
        <section className={styles.containerRightInner}>
          <header className={styles.headerRight}>
            <div className={styles.location}>
              <div className={styles.locationLeft}>
                <img src="location.png" />
                <p>Jhansi, India</p>
              </div>
              <button className={styles.plusSign}></button>
            </div>
          </header>
          <section className={styles.sunContainer}>
            <div className={styles.sunriseContainer}>
              <p>Sunrise</p>
              <div className={styles.rightCard}>
                <img src="Bars.png" />
                <p>7:30Am</p>
                <img src="weatherIcon.png" />
              </div>
            </div>
            <div>
              <p>Sunset</p>
              <div className={styles.rightCard}>
                <img src="Bars2.png" />
                <p>5:45 Pm</p>
                <img src="weatherIcon.png" />
              </div>
            </div>
          </section>
          <section className={styles.separation}>
            <div className={styles.hLine}></div>
            <div className={styles.circle}>
              <p>i</p>
            </div>
          </section>
          <section className={styles.box}>
            <div>
              <p>Humidity</p>
              <p>38%</p>
            </div>
            <div>
              <p>Chance of rain</p>
              <p>2%</p>
            </div>
            <div>
              <p>Air Quality</p>
              <section>
                <p>3/10</p>
                <p>Moderate</p>
              </section>
            </div>
            <div>
              <p>Wind speed</p>
              <p>3.8 km/h</p>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}
