import React from "react";
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img src="/images/logo.png" alt="logo"></img>
      <p>Apple Helper</p>
        <div className={styles.loginBlock}>
            {props.isAuth
                ? <div>{props.login} <button onClick={props.logout}>Log Out</button></div> :
                <NavLink to={'/login'}><button>Login</button></NavLink>}
        </div>
    </header>
  );
};

export default Header;



