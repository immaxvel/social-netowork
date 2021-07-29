import React from 'react';
import styles from "./Dialogs.module.css"


const Dialogs = () => {
    return (
        <div>
            <img className={styles.bg} src="bg.jpg" alt="bg"/>
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    <div className={styles.dialog + ' ' + styles.active}>
                        Maxim
                    </div>
                    <div className={styles.dialog}>
                        Julia
                    </div>
                    <div className={styles.dialog}>
                        Yegor
                    </div>
                    <div className={styles.dialog}>
                        Natalia
                    </div>
                    <div className={styles.dialog}>
                        Inna
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