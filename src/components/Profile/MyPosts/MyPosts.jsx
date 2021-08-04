import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/state";






const MyPosts = (props) => {

    let postElement = props.posts.map(post => <Post key={post.id} message={post.post} likes={post.likes}/>);
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostActionCreator(text);
        props.dispatch(action);

    }

    return (
        <div>
            <div className={styles.myPosts}>
                <h2>My Posts</h2>
                <div className={styles.createPost}>
                    <textarea ref={newPostElement}
                              onChange={onPostChange}
                              value={props.newPostText}/>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={styles.newPost}>
                <h3>New Post</h3>
                <div className={styles.posts}>
                    <h4>Posts:</h4>
                    {postElement}
                </div>
            </div>
        </div>
    );
};

export default MyPosts;
