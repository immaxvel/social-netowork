import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";




const MyPosts = (props) => {

    let postElement = props.posts.map(post => <Post key={post.id} message={post.post} likes={post.likes}/>);
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)

    }

    return (
        <div>
            <div className={styles.myPosts}>
                <h2>My Posts</h2>
                <div className={styles.createPost}>
                    <textarea ref={newPostElement}
                              placeholder={"Enter your post text...."}
                              onChange={onPostChange}
                              value={props.newPostText}/>
                    <button onClick={ onAddPost }>Add Post</button>
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
