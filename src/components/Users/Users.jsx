import React from 'react';
import style from './Users.module.scss';
import UserInfo from './UserInfo/UserInfo';
import * as axios from 'axios';

const Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                
                props.setUsers(res.data);
            })
    }
    let usersElements = 
        props.users.map(user => 
            <UserInfo key={user.id} name={user.name} address={user.address} company={user.company}/>)
    return (
        <div className={style.users}>
            <h1>Список пользователей</h1>
            {usersElements}
        </div>
    )
}

export default Users;
