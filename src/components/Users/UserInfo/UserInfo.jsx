import React from "react";
import style from './UserInfo.module.scss';

const UserInfo = (props) => {
    
    return (
        <div className={style.userInfo}>
            <div className={style.descr}>ФИО: </div>
            <span>{props.name}</span>
            <div className={style.descr}>город: </div>
            <span>{props.address.city}</span>
            <div className={style.descr}>компания: </div>
            <span>{props.company.name}</span>
            <a href="#">Подробнее</a>
        </div>
    )
}

export default UserInfo;