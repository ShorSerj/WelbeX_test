import React from 'react';
import style from './Header.module.scss'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    return(
       <header>
           <div className={style.wrapper}>
               <div className={style.logo}>
                   <img src="./img/logo1.png" alt="logo" />
               </div>
               <nav>
                    <ul className={style.links}>
                        <li>
                            <NavLink to="/">
                                Главная
                            </NavLink>
                        </li>   
                        <li>
                            <NavLink to="/todo">
                                ToDo
                            </NavLink>
                        </li>
                    </ul>
               </nav>
           </div>
       </header>
    )
}
export default Header