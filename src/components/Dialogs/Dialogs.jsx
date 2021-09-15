import React from 'react';
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name}
                                                                  id={dialog.name}/>);
    let messagesElements = state.messages.map(message => <Message key={message.id} message={message.message}/>);

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }
    //if(!props.isAuth) return <Redirect to={'/login'}/>;
    return (
        <div>
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={styles.messages}>
                    <div>{messagesElements}</div>
                    <AddMessageFormRedux/>
                </div>
            </div>
        </div>

    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.createMessage}>
            <Field placeholder={'Enter your message'} name={"newMessageBody"} component={'textarea'}>

            </Field>
            <button>Send Message</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;