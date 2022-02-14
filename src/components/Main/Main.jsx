import React from 'react';
import style from './Main.module.scss'

const Main = (props) => {
    return(
        <main className={style.wrapper}>
            <div className={style.logo}>
                    <img src="./img/logo.jpg" alt="logo" />
            </div>
            <h1>Главная страница</h1>
        </main>
    )
}
export default Main