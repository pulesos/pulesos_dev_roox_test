import React from "react";
import style from './Navbar.module.scss';

type PropsType = {
    sortUsersByAddress: () => void;
    sortUsersByCompany: () => void;
}

const Navbar: React.FC<PropsType> = ({sortUsersByAddress, sortUsersByCompany}) => {

    
    return (
        <nav className={style.nav}>
            <h2>Сортировка</h2>
            <button className={style.navBtn} onClick={sortUsersByAddress}>по городу</button>
            <button className={style.navBtn} onClick={sortUsersByCompany}>по компании</button>
        </nav>
    )
}

export default Navbar;