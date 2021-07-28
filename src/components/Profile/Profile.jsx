import React from "react";
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
      <div>
        My Posts
        <div>New Post</div>
        <div className='posts'>
          Posts
          <div className={styles.item}>Post1</div>
          <div className='item'>Post2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
