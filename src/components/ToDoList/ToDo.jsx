import React from 'react';
import Paginator from '../common/Paginator/Paginator.jsx';
import Column from './Column/Column.jsx';
import style from './ToDo.module.scss'

const ToDo = ({totalUsersCount, pageSize, tasks, onCurrentPage, currentPage, onDeleteTask, addTask}) => {
    
    const viewColumns = () => {
        return tasks.map((item, index)=>{
            return <Column tasks = {item} key={index} addTask={addTask}/>         
        })
    }
    
    return(
        <main className={style.toDO__wrapper}>
            <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} onCurrentPage={onCurrentPage} currentPage={currentPage}/>
            <div className={style.toDoList}>
                {tasks[0] && viewColumns()}
            </div>          
        </main>
    )
}
export default ToDo