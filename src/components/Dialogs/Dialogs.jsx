import React from 'react';
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {


    let dialogsElement = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.name}/>);
    let messagesElements = props.messages.map(message => <Message message={message.message}/>);

    return (
        <div>
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    {dialogsElement}
                </div>
                <div className={styles.messages}>
                    {messagesElements}
                </div>

            </div>

        </div>

    )
}


export default Dialogs;