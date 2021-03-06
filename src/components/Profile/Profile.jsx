import React from "react";
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div>

            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <div className={styles.profileContent}>
                <MyPostsContainer/>
            </div>

        </div>
    );
};

export default Profile;
