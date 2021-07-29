import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={styles.item}>
            <img className="post_avatar" src="avatar.jpg" alt="avatar"></img>
            {props.message}
            <div>
                <span>Likes: </span>{props.likes}
            </div>
        </div>
    );
};

export default Post;
