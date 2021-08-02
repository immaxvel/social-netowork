import React from 'react';
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {


    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.name}/>);
    let messagesElements = props.state.messages.map(message => <Message key={message.id} message={message.message}/>);

    return (
        <div>
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={styles.messages}>
                    {messagesElements}
                </div>

            </div>

        </div>

    )
}


export default Dialogs;