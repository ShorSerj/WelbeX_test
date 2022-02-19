import React, { useEffect} from 'react';
import ToDo from './ToDo.jsx'
import { connect } from 'react-redux'
import Preloader from '../common/Preloader/Preloader.js';
import {getTasks, getAllTasks, addTask, editTask, deleteTask} from '../../redux/tasks-reducer.js'

const ToDoContainer = ({getTasks, getAllTasks, tasks, pageSize, allTasks, totalUsersCount, currentPage, addTask, addMode, editTask, deleteTask, isFetching}) => {
    useEffect( () => {
      getAllTasks()
      getTasks(allTasks)    
    }, [JSON.stringify(allTasks), totalUsersCount])   

    const onCurrentPage = (pageNumber) => {
      getTasks(allTasks, pageSize, pageNumber)
    }

    const onDeleteTask = (pageNumber) => {
      getTasks(allTasks, pageSize, pageNumber)
    }

    if (isFetching) {
      return <Preloader />
    }
    return(
        <ToDo tasks={tasks} pageSize={pageSize} totalUsersCount={totalUsersCount} onCurrentPage={onCurrentPage} currentPage={currentPage} onDeleteTask={onDeleteTask} addTask={addTask} addMode={addMode} editTask={editTask} deleteTask={deleteTask} isFetching={isFetching}></ToDo>
    )
}

let mapStateToProps = (state) => {
  return {
    tasks: state.tasks.tasks,
    allTasks: state.tasks.allTasks,
    pageSize: state.tasks.pageSize,
    currentPage: state.tasks.currentPage,
    totalUsersCount: state.tasks.totalUsersCount,
    addMode: state.tasks.addMode,
    isFetching: state.tasks.isFetching, 
  }
}

export default connect(mapStateToProps, {getTasks, getAllTasks, addTask, editTask, deleteTask})(ToDoContainer)