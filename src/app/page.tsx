import styles from "./page.module.css";
import { Card } from "./components/card";
import { getWeather } from "./components/getData";
import { ChangeTheme } from "./components/changeTheme";
import { PlusSign } from "./components/PlusSign";

export default async function Home() {
  const weather = await getWeather("30043");

  const func = () => {
    const localTime = weather.location.localtime;
    const dateObj = new Date(localTime);
    const day = dateObj.getDate();
    const month = dateObj.toLocaleString("en-US", { month: "short" });
    const year = dateObj.toLocaleString("en-US", { year: "2-digit" });
    const formattedTime = `${day}${getOrdinalSuffix(day)} ${month} ${year}`;

    return formattedTime;
  };
  function getOrdinalSuffix(day: any) {
    if (day >= 11 && day <= 13) {
      return "th";
    }

    const lastDigit = day % 10;
    switch (lastDigit) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }
  function convertToRegularTime(time: string) {
    // Split the time string into hours and minutes
    let timeArray = time.split(":");
    let hours = parseInt(timeArray[0]);
    let minutes: number | string = parseInt(timeArray[1]);

    // Determine if it's AM or PM
    let period = hours >= 12 ? "PM" : "AM";

    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // If hours is 0, set it to 12

    // Format minutes to have leading zero if needed
    minutes = minutes < 10 ? "0" + minutes : minutes;

    // Return the formatted time
    return hours + ":" + minutes + " " + period;
  }
  function getDayOfWeek(number: string) {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const index = parseInt(number, 10) - 1;

    if (Math.abs(index) >= 0 && Math.abs(index) < daysOfWeek.length) {
      return daysOfWeek[Math.abs(index)];
    } else {
      return "Invalid input. Please enter a number between 1 and 7.";
    }
  }

  return (
    <main className={styles.parent}>
      <section className={styles.containerLeft}>
        <section className={styles.containerLeftInner}>
          <div className={styles.header}>
            <img src="/cloud.png" className={styles.mainWeather} />
            <ChangeTheme />
            <div className={styles.tempToggle}>
              <p>C</p>
              <p>F</p>
            </div>
          </div>
          <div className={styles.currentWeather}>
            <div className={styles.currentTemp}>{weather.current.temp_f}</div>
            <div className={styles.cOrF}>F</div>
          </div>

          <div className={styles.date}>{func()}</div>
          <div className={styles.dayAndTime}>
            <p className={styles.day}>{getDayOfWeek(weather.current.is_day)}</p>
            <p className={styles.time}>
              {convertToRegularTime(weather.location.localtime.slice(-5))}
            </p>
          </div>
          <div className={styles.weatherConditions}>
            <section className={styles.wind}>
              <img src="arrow.png" />
              <p>Wind</p>
              <p>{weather.current.wind_mph} mp/h</p>
            </section>
            <div className={styles.verticalLine}> </div>
            <section className={styles.humidity}>
              <img src="rainDrop.png" />
              <p>Hum</p>
              <p>{weather.current.humidity}%</p>
            </section>
            <div className={styles.verticalLine}> </div>

            <section className={styles.rain}>
              <img src="smallCloud.png" />
              <p>Rain</p>
              <p>
                {weather.forecast.forecastday[0].day.daily_chance_of_rain} %
              </p>
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
                <p>{weather.location.name + "," + weather.location.region}</p>
              </div>

              <PlusSign />
            </div>
          </header>
          <section className={styles.sunContainer}>
            <div className={styles.sunriseContainer}>
              <p style={{ fontSize: "32px" }}> Sunrise</p>
              <div className={styles.rightCard}>
                <img src="Bars.png" />
                <p style={{ fontSize: "32px" }}>
                  {convertToRegularTime(
                    weather.forecast.forecastday[0].astro.sunrise
                  ).slice(0, -2)}

                  <span style={{ fontSize: "20px" }}>Am</span>
                </p>
                <img src="weatherIcon.png" />
              </div>
            </div>
            <div>
              <p style={{ fontSize: "32px" }}>Sunset</p>
              <div className={styles.rightCard}>
                <img src="Bars2.png" />
                <p style={{ fontSize: "28px" }}>
                  {convertToRegularTime(
                    weather.forecast.forecastday[0].astro.sunset
                  ).slice(0, -2)}

                  <span style={{ fontSize: "20px" }}>PM</span>
                </p>
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
              <p>{weather.current.humidity} %</p>
            </div>
            <div>
              <p>Chance of rain</p>
              <p>{weather.forecast.forecastday[0].day.daily_chance_of_rain}%</p>
            </div>
            <div>
              <p>Air Quality</p>
              <section>
                <p>{weather.current.air_quality["us-epa-index"]}/10</p>
                <p>
                  {weather.current.air_quality["us-epa-index"] < 5
                    ? "Good"
                    : "Moderate"}
                </p>
              </section>
            </div>
            <div>
              <p>Wind speed</p>
              <p>{weather.current.wind_mph} mp/h</p>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}
