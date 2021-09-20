import React from 'react';
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validations/validators";
import {Textarea} from "../Common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50);

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name}
                                                                  id={dialog.name}/>);
    let messagesElements = state.messages.map(message => <Message key={message.id} message={message.message}/>);

    let newMessageBody = state.newMessageBody;

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)

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
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>

    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.createMessage}>
            <Field placeholder={'Enter your message'}
                   name={"newMessageBody"}
                   component={Textarea}
                   validate={[required, maxLength50]}
            />
            <button>Send Message</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;