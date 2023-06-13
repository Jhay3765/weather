"use client";

import styles from "../page.module.css";
import { useState } from "react";
export const PlusSign = () => {
  const [zipCode, setZip] = useState("");
  const [show, setShow] = useState(true);
  const handleZipCodeChange = (e: any) => {
    setZip(e.target.value);
  };

  const handleZipCodeSubmit = (e: any) => {
    e.preventDefault();
    if (zipCode) {
      console.log("hello"); // getWeatherData(zipCode);
    }
  };

  return (
    <>
      {show && (
        <button
          className={styles.plusSign}
          onClick={() => setShow(!show)}
        ></button>
      )}
      {!show && (
        <>
          <form onSubmit={handleZipCodeSubmit}>
            <input
              type="text"
              placeholder="Enter Zipcode"
              value={zipCode}
              onChange={handleZipCodeChange}
            />
          </form>
        </>
      )}
    </>
  );
};
