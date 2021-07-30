import React from 'react';
import styles from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return <div className={styles.dialog + ' ' + styles.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={styles.message}>{props.message}</div>

}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Maxim'},
        {id: 2, name: 'Julia'},
        {id: 3, name: 'Yegor'},
        {id: 4, name: 'Natalia'},
        {id: 5, name: 'Natalia'}
    ]
    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your IT-Kamasutra'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]
    return (
        <div>
            <img className={styles.bg} src="bg.jpg" alt="bg"/>
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                    <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                    <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                    <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>

                </div>
                <div className={styles.messages}>
                    <Message message={messagesData[0].message}/>
                    <Message message={messagesData[1].message}/>
                    <Message message={messagesData[2].message}/>
                    <Message message={messagesData[3].message}/>
                    <Message message={messagesData[4].message}/>
                </div>

            </div>

        </div>

    )
}


export default Dialogs;