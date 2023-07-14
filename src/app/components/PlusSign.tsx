"use client";
import { getWeather } from "./getData";
import styles from "../page.module.css";
import { useState } from "react";
//import { revalidatePath } from "next/cache";

export const PlusSign = () => {
  const [zipCode, setZip] = useState("");

  const [show, setShow] = useState(true);
  const handleZipCodeChange = (e: any) => {
    setZip(e.target.value);
  };

  const handleZipCodeSubmit = (e: any) => {
    //revalidatePath("/");
    e.preventDefault();
    //  if (zipCode) {
    //   getWeather(zipCode);
    // }
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
