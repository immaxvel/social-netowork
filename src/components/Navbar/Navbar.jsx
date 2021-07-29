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
                    <NavLink activeClassName={styles.active} to="/dialogs">Messages</NavLink>
                </div>
                <div>
                    <a to="#">Friends</a>
                </div>
                <div>
                    <a href="#">Music</a>
                </div>
                <div>
                    <a href="#">News</a>
                </div>
                <div>
                    <a href="#">Settings</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
