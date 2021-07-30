import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div>
            <div>
                <img className={styles.bg} src="bg.jpg" alt="bg"/>
            </div>
            <ProfileInfo/>
            <div className={styles.profileContent}>
                <MyPosts/>
            </div>

        </div>
    );
};

export default Profile;
