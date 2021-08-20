import React from "react";
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img src="/images/logo.png" alt="logo"></img>
      <p>Apple Helper</p>
        <div className={styles.loginBlock}>
            {props.isAuth ? props.login :
                <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
  );
};

export default Header;
