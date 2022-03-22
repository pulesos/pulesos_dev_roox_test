import React from "react";
import { Link } from "react-router-dom";
import style from './UserInfo.module.scss';

const UserInfo = (props) => {
    return (
        <div className={style.userInfo}>
            <div className={style.userInfoDescr}>ФИО: </div>
            <span className={style.userInfoData}>{props.user.name}</span>
            <div className={style.userInfoDescr}>город: </div>
            <span className={style.userInfoData}>{props.user.address.city}</span>
            <div className={style.userInfoDescr}>компания: </div>
            <span className={style.userInfoData}>{props.user.company.name}</span>
            <Link to={`/user/${props.user.id}`} className={style.userLink}>Подробнее</Link>
        </div>
    )
}

export default UserInfo;