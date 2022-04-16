import React from 'react';
import style from './Users.module.scss';
import UserInfo from './UserInfo/UserInfo';
import preloader from '../../assets/images/preloader.svg';
import { UserType } from '../../types/types';

type UsersType = {
    users: UserType[],
    isFetching: boolean
}

const Users: React.FC<UsersType> = (props) => {

    let usersElements = 
        props.users.map(user => 
            <UserInfo key={user.id} user={user}/>)

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