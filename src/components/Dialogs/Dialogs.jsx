import React from 'react';
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/state";



const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name}
                                                                        id={dialog.name}/>);
    let messagesElements = props.state.messages.map(message => <Message key={message.id} message={message.message}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = () => {
        let message = newMessageElement.current.value;
        let action = updateNewMessageActionCreator(message);
        props.dispatch(action);

    }
    return (
        <div>
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={styles.messages}>
                    {messagesElements}
                    <div className={styles.createMessage}>
                        <textarea ref={newMessageElement}
                                  onChange={onMessageChange}
                                  value={props.newMessageText}

                        />
                        <button onClick={addMessage}>Send Message</button>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Dialogs;