import React from 'react';
import styles from './Users.module.css'
import userPhoto from '../../assets/images/avatar.jpg'
import '../Navbar/Navbar.module.css'
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/api";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>

            {pages.map(page => {
                return <span className={props.currentPage === page && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(page)
                             }}>
                               {page}</span>

            })};
            {props.users.map(user =>
                <div className={styles.foundedUser} key={user.id}>
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
                                <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, user.id);
                                    usersAPI.unfollow(user.id)
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(user.id)
                                            }
                                            props.toggleFollowingProgress(false, user.id);
                                        });
                                }}>UnFollow</button>
                                :
                                <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, user.id);
                                    usersAPI.follow(user.id)
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(user.id)
                                            }
                                            props.toggleFollowingProgress(false, user.id);
                                        });

                                }}>Follow</button>}

                        </div>
                    </div>
                    <div className={styles.userInfo}>
                        <div className={styles.userName}>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </div>
                        <div className={styles.userLocation}>
                            <div>{"user.location.country"}</div>
                            <div>{"user.location.city"}</div>
                        </div>
                    </div>
                </div>)}
        </div>
    )
}

export default Users;







