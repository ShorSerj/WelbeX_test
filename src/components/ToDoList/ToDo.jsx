import React, { useEffect } from 'react';
import Paginator from '../common/Paginator/Paginator.jsx';
import Column from './Column/Column.jsx';
import style from './ToDo.module.scss'

const ToDo = ({totalUsersCount, pageSize, tasks}) => {

    const viewColumns = () => {
        return tasks.map((item, index)=>{
            console.log('item', item[0])
            return <Column tasks = {item} title={`User: ${item.userId}`} key={index}/>         
        })
    }
    
    return(
        <main className={style.toDO__wrapper}>
            <div className={style.leftSide}>
                <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize}/>
                <div className={style.toDoList}>
                    {tasks[0] && viewColumns()}
                </div> 
            </div>          
        </main>
    )
}
export default ToDo