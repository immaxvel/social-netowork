import React from "react";
import styles from "./Post.module.css";
import userAvatar from "./../../../../assets/images/avatar.jpg"


const Post = (props) => {
    return (
        <div className={styles.item}>
            <img className="post_avatar" src={userAvatar}></img>
            {props.message}
            <div>
                <span>Likes: </span>{props.likes}
            </div>
        </div>
    );
};

export default Post;
