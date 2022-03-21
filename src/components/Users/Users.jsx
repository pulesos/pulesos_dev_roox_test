import React, { useEffect, useState } from 'react';
import style from './Users.module.scss';
import UserInfo from './UserInfo/UserInfo';
import preloader from '../../assets/images/preloader.svg';
import * as axios from 'axios';

const Users = (props) => {
    const [users, setUsers] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            
            props.setUsers(res.data);
            setIsFetching(false);
        })
    })

    const sortByCity = () => {
        setUsers([...users.sort((a, b) => (a.adress.city > b.address.city ? 1 : -1))]);
    };
    const sortByCompany = () => {
        setUsers([...users.sort((a, b) => (a.company > b.company ? 1 : -1))]);
    };
    
    let usersElements = 
        props.users.map(user => 
            <UserInfo key={user.id} name={user.name} address={user.address} company={user.company}/>)

    return (
        <div className={style.users}>
            {isFetching ? <img src={preloader} className={style.preloader}/> : 
            <>
            <h1>Список пользователей</h1>
            {usersElements}
            <div className={style.usersLength}>Найдено {props.users.length} пользователей</div>
            </>}
            
        </div>
    )
}

export default Users;