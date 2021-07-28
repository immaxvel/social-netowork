import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from './Profile.module.css'

const Profile = () => {
  return (
    <div className={styles.content}>
      <div>
        <img className={styles.bg} src="bg.jpg" alt="bg" />
      </div>
      <div>
        <img className={styles.avatar} src="avatar.jpg" alt="" srcset="" />
      </div>
      <MyPosts/>
    </div>
  );
};

export default Profile;
