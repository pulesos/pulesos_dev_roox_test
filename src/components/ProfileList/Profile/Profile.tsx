import React, {ChangeEvent, useState} from "react";
import style from "./Profile.module.scss";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserType } from "../../../types/types";

type PropsType = {
    user: UserType,
    disabled: boolean
}

const Profile: React.FC<PropsType> = (props) => {
    
    const [name, setName] = useState(props.user.name);
    const [username, setUsername] = useState(props.user.username);
    const [email, setEmail] = useState(props.user.email);
    const [street, setStreet] = useState(props.user.address!.street);
    const [city, setCity] = useState(props.user.address!.city);
    const [zipcode, setZipcode] = useState(props.user.address!.zipcode);
    const [phone, setPhone] = useState(props.user.phone);
    const [website, setWebsite] = useState(props.user.website);

    const { 
        register, 
        formState: {
            errors
        },
        handleSubmit
        } = useForm();

    const onSubmit = (data: any) => {
        alert('Отправлено! Загляни в консоль');
        console.log(data)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset disabled={props.disabled} className={style.fieldset}>
                        <label>
                            <span className={style.profileHeader}>Name</span>
                            <input {...register("name", {required: true})} 
                                id={errors?.name && style.error} 
                                defaultValue={name} 
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
                        </label>
                        <label>
                            <span className={style.profileHeader}>User name</span>
                            <input {...register("username", {required: true})}
                                id={errors?.username && style.error}
                                defaultValue={username}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}/>
                        </label>
                        <label>
                            <span className={style.profileHeader}>E-mail</span>
                            <input {...register("email", {required: true})}
                                id={errors?.email && style.error}
                                defaultValue={email}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
                        </label>
                        <label>
                            <span className={style.profileHeader}>Street</span>
                            <input {...register("street", {required: true})}
                                id={errors?.street && style.error}
                                defaultValue={street}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setStreet(e.target.value)}/>
                        </label>
                        <label>
                            <span className={style.profileHeader}>City</span>
                            <input {...register("city", {required: true})}
                                id={errors?.city && style.error}
                                defaultValue={city}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setCity(e.target.value)}/>
                        </label>
                        <label>
                            <span className={style.profileHeader}>Zip code</span>
                            <input {...register("zipcode", {required: true})}
                                id={errors?.zipcode && style.error}
                                defaultValue={zipcode}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setZipcode(e.target.value)}/>
                        </label>
                        <label>
                            <span className={style.profileHeader}>Phone</span>
                            <input {...register("phone", {required: true})}
                                id={errors?.phone && style.error}
                                defaultValue={phone}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}/>
                        </label>
                        <label>
                            <span className={style.profileHeader}>Website</span>
                            <input {...register("website", {required: true})}
                                id={errors?.website && style.error}
                                defaultValue={website}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setWebsite(e.target.value)}/>
                        </label>
                        <label>
                            <span className={style.profileHeader}>Comment</span>
                            <input {...register("comment")} className={style.profileTextarea}/>
                        </label>
                    <Link to="/" className={style.profileLink}>Назад</Link>
                </fieldset>
                <button type="submit" disabled={props.disabled} className={style.profileBtnSubmit}>Отправить</button>
            </form>
        </>
    )
}

export default Profile;