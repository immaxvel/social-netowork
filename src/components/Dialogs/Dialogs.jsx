import React from 'react';
import styles from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


const Dialogs = () => {
    return (
        <div>
            <img className={styles.bg} src="bg.jpg" alt="bg"/>
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    <div className={styles.dialog + ' ' + styles.active}>
                       <NavLink className={styles.link} to='/dialogs/1'>Maxim</NavLink>
                    </div>
                    <div className={styles.dialog + ' ' + styles.active}>
                        <NavLink className={styles.link} to='/dialogs/2'>Julia</NavLink>
                    </div>
                    <div className={styles.dialog + ' ' + styles.active}>
                        <NavLink className={styles.link} to='/dialogs/3'>Yegor</NavLink>
                    </div>
                    <div className={styles.dialog + ' ' + styles.active}>
                        <NavLink className={styles.link} to='/dialogs/4'>Natalia</NavLink>
                    </div>
                    <div className={styles.dialog + ' ' + styles.active}>
                        <NavLink className={styles.link} to='/dialogs/5'>Inna</NavLink>
                    </div>
                </div>


                <div className={styles.messages}>
                    <div className={styles.message}>Hi</div>
                    <div className={styles.message}>How is your IT-Kamasutra</div>
                    <div className={styles.message}>Yo</div>
                </div>

            </div>

        </div>

    )
}


export default Dialogs;