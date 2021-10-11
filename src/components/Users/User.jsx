import React from 'react';
import styles from './Users.module.css'
import userPhoto from '../../assets/images/avatar.jpg'
import '../Navbar/Navbar.module.css'
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, unfollow, follow}) => {

    return (
        <div className={styles.foundedUser}>
            <div>
                <div className={styles.avatarFollow}>
                    <NavLink to={'/profile/' + user.id}>
                        <img className={styles.avaUser}
                             src={user.photos.small != null ? user.photos.small : userPhoto}
                             alt={'avatar'}/>
                    </NavLink>
                </div>
                <div className={styles.follButton}>
                    {user.followed ?
                        <button disabled={followingInProgress
                            .some(id => id === user.id)} onClick={() => {
                            unfollow(user.id)
                        }}>UnFollow</button>
                        :
                        <button disabled={followingInProgress
                            .some(id => id === user.id)} onClick={() => {
                            follow(user.id)
                        }}>Follow</button>}
                </div>
            </div>
            <div className={styles.userInfo}>
                <div className={styles.userName}>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                {/*<div className={styles.userLocation}>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </div>*/}
            </div>
        </div>)
}

export default User;







