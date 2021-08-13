import React from 'react';
import styles from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/avatar.jpg'



class Users extends React.Component {
    getUsers = () => {
        if (this.props.users.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setUsers(response.data.items);
                });
            /*props.setUsers([
                {
                    id: 1,
                    avatar: "avatar.jpg",
                    followed: true,
                    fullName: 'Maxim',
                    status: 'Front-end developer',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    avatar: "avatar.jpg",
                    followed: false,
                    fullName: 'Julia',
                    status: 'Head specialist',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    avatar: "avatar.jpg",
                    followed: false,
                    fullName: 'Yegor',
                    status: 'Manual QA',
                    location: {city: 'Kiev', country: 'Ukraine'}
                }]
            )*/
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.getUsers}>Get Users</button>
                {this.props.users.map(user =>
                    <div className={styles.foundedUser} key={user.id}>
                        <div>
                            <div className={styles.avatarFollow}>
                                <img className={styles.avaUser}
                                     src={user.photos.small != null ? user.photos.small : userPhoto}
                                     alt={'avatar'}/>
                            </div>
                            <div className={styles.follButton}>
                                {user.followed ?
                                    <button onClick={() => {
                                        this.props.unfollow(user.id)
                                    }}>UnFollow</button>
                                    : <button onClick={() => {
                                        this.props.follow(user.id)
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
}
export default Users;




