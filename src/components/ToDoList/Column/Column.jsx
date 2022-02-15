import React from 'react';
import style from './Column.module.scss'

const Column = (props) => {
    const parseTasks = ()=>{
       
    }

    return(
        <div className={style.block}>
            <div className={style.header}>{props.title}</div>
            <div className={style.content__wrapper}>
                {
                    props.tasks.map((item) =>{
                        return <div className={style.task} key={item.id}> 
                        {item.title}
                        { item.completed && <span>Completed</span>}
                        </div>
                    }) 
                }     
            </div>
        </div>
    )
}
export default Column