import React from 'react'
import Loader from "../../../assets/images/Loader.svg";
import styles from "./Preloader.module.css";

const Preloader = (props) => {
    return (
        <div className={styles.loader}>
            <img  src={Loader}/>
        </div>
    )
}

export default Preloader;