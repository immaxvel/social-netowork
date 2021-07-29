import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div className={styles.myPosts}>
                <h2>My Posts</h2>
                <div className={styles.createPost}>
                    <textarea placeholder="Write your Post here....."></textarea>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={styles.newPost}>
                <h3>New Post</h3>
                <div className={styles.posts}>
                    <h4>Posts:</h4>
                    <Post message="Hi, how are you?" likes="5"/>
                    <Post message="It's my first post" likes="11"/>
                </div>
            </div>
        </div>
    );
};

export default MyPosts;
