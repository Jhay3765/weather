"use client";
import { useState } from "react";
import { useEffect } from "react";
import styles from "../page.module.css";

export const ChangeTheme = () => {
  const themes = [
    "linear-gradient(243.18deg, #5CEBD1 0%, #1A2B2C 100%)",
    "linear-gradient(243.18deg, #0C05E7 0%, #9B2FCD 100%)",
    "linear-gradient(243.18deg, #BCC92D 0%, #48C1C9 100%)",
    "linear-gradient(243.18deg, #9065BC 0%, rgba(255, 0, 108, 0.38) 100%)",
    "linear-gradient(243.18deg, #1C565E 0%, #3DC7DA 100%)",
    "linear-gradient(243.18deg, #00C236 0%, #40B845 100%)",
  ];
  const [themeIndex, setThemeIndex] = useState(0);
  const changeTheme = () => {
    setThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
  };
  useEffect(() => {
    document.body.style.background = themes[themeIndex];
  }, [themeIndex]);

  return (
    <button onClick={changeTheme} className={styles.theme}>
      Change Theme
    </button>
  );
};
