import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import Profile from "./Profile/Profile";
import preloader from "../../assets/images/preloader.svg";
import style from "./ProfileList.module.scss";

type IsFetchingType = {
    isFetching: boolean
}

type RouteParams = {
    id: string
}

const ProfileList: React.FC<IsFetchingType> = (props: any) => {
    const {id} = useParams<RouteParams>();

    const [user, setUser] = useState({});
    const [isFetching, setIsFetching] = useState(true);
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => {
                setUser(res.data);
                setIsFetching(false);
            })
    }, [id])
    
    return (
        <div className={style.profile}>
            <div className={style.profileBlock}>
                <button onClick={() => setDisabled(false)} className={style.profileBtn}>Редактировать</button>
                <h2 className={style.profileHeader}>Профиль пользователя</h2>
            </div>
            {isFetching === false ? <Profile user={user} disabled={disabled}/> : <img src={preloader} alt='preloader' className={style.preloader}/>}
        </div>
    )
}

export default ProfileList;