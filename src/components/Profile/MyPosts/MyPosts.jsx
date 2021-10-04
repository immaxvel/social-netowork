import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validations/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);


const MyPosts = React.memo(props => {

    let postElement = props.posts.map(post => <Post key={post.id} message={post.post} likes={post.likes}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div>
            <div className={styles.myPosts}>
                <h2>My Posts</h2>
                <AddNewPostFormRedux onSubmit={onAddPost}/>
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
});

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.createPost}>
                    <Field name={'newPostText'}
                           component={Textarea}
                           placeholder={'Write your message here...'}
                           validate={[required, maxLength10]}

                    />
            <button>Add Post</button>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddPostForm'})(AddNewPostForm);

export default MyPosts;
