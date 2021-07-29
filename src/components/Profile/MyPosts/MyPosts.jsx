import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea>Write your message here.....</textarea>
                <button>Add Post</button>
            </div>
            <div>New Post</div>
            <div className="posts">
                Posts:
                <Post message="Hi, how are you?" likes="5"/>
                <Post message="It's my first post" likes="11"/>
            </div>
        </div>
    );
};

export default MyPosts;
