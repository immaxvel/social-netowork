import React from "react";
import styles from "./Post.module.css";

const Post = () => {
  return (
    <div className={styles.item}>
      <img className="post_avatar" src="avatar.jpg"></img>
      Post1
      <div>
        <span>Like : 5</span>
      </div>
    </div>
  );
};

export default Post;
