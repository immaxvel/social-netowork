import React from 'react'
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.menu}>
                <div>
                    <NavLink activeClassName={styles.active} to="/profile">Profile</NavLink>
                </div>
                <div>
                    <NavLink activeClassName={styles.active} to="/dialogs">Dialogs</NavLink>
                </div>
                <div>
                    <NavLink activeClassName={styles.active} to="/Friends">Friends</NavLink>
                </div>
                <div>
                    <NavLink activeClassName={styles.active} to="/Music">Music</NavLink>
                </div>
                <div>
                    <NavLink activeClassName={styles.active} to="/News">News</NavLink>
                </div>
                <div>
                    <NavLink activeClassName={styles.active} to="/Users">Find User</NavLink>
                </div>
                <div>
                    <NavLink activeClassName={styles.active} to="/Settings">Settings</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
