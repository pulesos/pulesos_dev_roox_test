import React from "react";
import style from './Navbar.module.scss';

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <h2>Сортировка</h2>
            <button className={style.btn}>по городу</button>
            <button className={style.btn}>по компании</button>
        </nav>
    )
}

export default Navbar;