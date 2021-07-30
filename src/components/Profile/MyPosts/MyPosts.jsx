import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = () => {

    let postData = [
        {id: 1, post: 'Hi, how are you?', likes: 12},
        {id: 2, post: 'It\'s my first post!', likes: 11}
    ]
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
                    <Post message={postData[0].post} likes={postData[0].likes}/>
                    <Post message={postData[1].post} likes={postData[1].likes}/>
                </div>
            </div>
        </div>
    );
};

export default MyPosts;
