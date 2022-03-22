import React from "react";
import style from './Navbar.module.scss';

const Navbar = ({sortFunc}) => {

    
    return (
        <nav className={style.nav}>
            <h2>Сортировка</h2>
            <button className={style.btn} onClick={() => sortFunc('city')}>по городу</button>
            <button className={style.btn} onClick={() => sortFunc('company')}>по компании</button>
        </nav>
    )
}

export default Navbar;