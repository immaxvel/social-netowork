import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>

            <ProfileInfo/>
            <div className={styles.profileContent}>
                <MyPosts posts={props.state}/>
            </div>

        </div>
    );
};

export default Profile;
