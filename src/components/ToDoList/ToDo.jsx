import React from 'react';
import style from './ToDo.module.scss'

const ToDo = (props) => {
    console.log(props.tasks)
    return(
        <main>
            <div className={style.users}>
                <button className={style.user}>User_1</button>
                <button className={style.user}>User_2</button>
                <button className={style.user}>User_3</button>
            </div>
            <div className={style.ToDoList}>
                <div className={style.block}>{props.tasks.map((item)=> {
                    if(item.completed){
                       return <div className={style.task} key={item.id}>{item.title}</div>
                    }
                })
                }</div>
                <div className={style.block}>Block 2</div>
                <div className={style.block}>Block 3</div>
            </div>
        </main>
    )
}
export default ToDo