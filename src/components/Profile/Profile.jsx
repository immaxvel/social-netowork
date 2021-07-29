import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from './Profile.module.css'

const Profile = () => {
    return (
        <div>
            <div>
                <img className={styles.bg} src="bg.jpg" alt="bg"/>
            </div>
            <div className={styles.profileContent}>
                <div className={styles.profileInfo}>
                    <img className={styles.avatar} src="avatar.jpg" alt="avatar"/>
                    <div className={styles.info}>
                        <h2>Maxim Velichko</h2>
                        <p>Front-End Developer</p>
                        <p>Minsk, Belarus</p>
                    </div>
                </div>
                <MyPosts/>
            </div>

        </div>
    );
};

export default Profile;
