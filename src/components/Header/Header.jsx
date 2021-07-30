import React from "react";
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/images/logo.png" alt="logo"></img>
      <p>Apple Helper</p>
    </header>
  );
};

export default Header;
