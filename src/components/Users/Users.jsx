import React from 'react';
import '../Navbar/Navbar.module.css'
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

const Users = ({   currentPage,
                   onPageChanged,
                   totalUsersCount,
                   pageSize,
                   selectedPage,
                   user,
                   follow,
                   followingInProgress,
                   unfollow,
                   ...props}) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <Paginator currentPage={currentPage}
                       selectedPage={selectedPage}
                       onPageChanged={onPageChanged}
                       totalUsersCount={totalUsersCount}
                       pageSize={pageSize}
            />
            {props.users.map(user =>
                <User user={user}
                      followingInProgress={followingInProgress}
                      follow={follow}
                      unfollow={unfollow}
                      key={user.id}/>)}
        </div>
    )
}
export default Users;







