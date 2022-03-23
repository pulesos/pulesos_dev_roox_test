import React, {useState} from "react";
import style from "./Profile.module.scss";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Profile = (props) => {
    
    const [name, setName] = useState(props.user.name);
    const [username, setUsername] = useState(props.user.username);
    const [email, setEmail] = useState(props.user.email);
    const [street, setStreet] = useState(props.user.email);
    const [city, setCity] = useState(props.user.phone);
    const [zipcode, setZipcode] = useState(props.user.address.city);
    const [phone, setPhone] = useState(props.user.address.zipcode);
    const [website, setWebsite] = useState(props.user.website);

    const { 
        register, 
        formState: {
            errors
        },
        handleSubmit
        } = useForm();

    const onSubmit = (data) => {
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
                                onChange={(e) => setName(e.target)}/>
                        </label>
                        <label>
                            <span className={style.profileHeader}>User name</span>
                            <input {...register("username", {required: true})}
                                id={errors?.username && style.error}
                                defaultValue={username}
                                onChange={(e) => setUsername(e.target)}/>
                        </label>
                        <label>
                            <span className={style.profileHeader}>E-mail</span>
                            <input {...register("email", {required: true})}
                                id={errors?.email && style.error}
                                defaultValue={email}
                                onChange={(e) => setEmail(e.target)}/>
                        </label>
                        <label>
                            <span className={style.profileHeader}>Street</span>
                            <input {...register("street", {required: true})}
                                id={errors?.street && style.error}
                                defaultValue={street}
                                onChange={(e) => setStreet(e.target)}/>
                        </label>
                        <label>
                            <span className={style.profileHeader}>City</span>
                            <input {...register("city", {required: true})}
                                id={errors?.city && style.error}
                                defaultValue={city}
                                onChange={(e) => setCity(e.target)}/>
                        </label>
                        <label>
                            <span className={style.profileHeader}>Zip code</span>
                            <input {...register("zipcode", {required: true})}
                                id={errors?.zipcode && style.error}
                                defaultValue={zipcode}
                                onChange={(e) => setZipcode(e.target)}/>
                        </label>
                        <label>
                            <span className={style.profileHeader}>Phone</span>
                            <input {...register("phone", {required: true})}
                                id={errors?.phone && style.error}
                                defaultValue={phone}
                                onChange={(e) => setPhone(e.target)}/>
                        </label>
                        <label>
                            <span className={style.profileHeader}>Website</span>
                            <input {...register("website", {required: true})}
                                id={errors?.website && style.error}
                                defaultValue={website}
                                onChange={(e) => setWebsite(e.target)}/>
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