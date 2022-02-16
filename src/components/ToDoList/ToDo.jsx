import React from 'react';
import Paginator from '../common/Paginator/Paginator.jsx';
import Column from './Column/Column.jsx';
import style from './ToDo.module.scss'

const ToDo = ({totalUsersCount, pageSize, tasks, onCurrentPage}) => {
    
    const viewColumns = () => {
        return tasks.map((item, index)=>{
            return <Column tasks = {item} key={index}/>         
        })
    }
    
    return(
        <main className={style.toDO__wrapper}>
            <div className={style.leftSide}>
                <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} onCurrentPage={onCurrentPage}/>
                <div className={style.toDoList}>
                    {tasks[0] && viewColumns()}
                </div> 
            </div>          
        </main>
    )
}
export default ToDo