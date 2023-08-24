import React from "react";
import MyForm from "./MyForm";
import styles from "./Main.module.css";
import background from "../images/background.png";
import foreground from "../images/foreground.png";

function Main() {
  return (
    <>
      <header className={styles.header}>
        <img src={background} className={styles.background} alt="city"></img>
        <img src={foreground} className={styles.foreground} alt="fore"></img>
        <MyForm />
      </header>
    </>
  );
}

export default Main;
