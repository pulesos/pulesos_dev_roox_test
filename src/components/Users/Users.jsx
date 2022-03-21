import React from 'react';
import style from './Users.module.scss';
import UserInfo from './UserInfo/UserInfo';
import preloader from '../../assets/images/preloader.svg';

const Users = (props) => {

    let usersElements = 
        props.users.map(user => 
            <UserInfo key={user.id} name={user.name} address={user.address} company={user.company}/>)

    return (
        <div className={style.users}>
            {props.isFetching ? <img src={preloader} alt='preloader' className={style.preloader}/> : 
            <>
            <h1>Список пользователей</h1>
            {usersElements}
            <div className={style.usersLength}>Найдено {props.users.length} пользователей</div>
            </>}
            
        </div>
    )
}

export default Users;