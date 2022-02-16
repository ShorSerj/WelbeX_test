import React, { useEffect} from 'react';
import ToDo from './ToDo.jsx'
import { connect } from 'react-redux'
import {getTasks, getAllTasks} from '../../redux/tasks-reducer.js'

const ToDoContainer = ({getTasks, getAllTasks, tasks, pageSize, allTasks, totalUsersCount}) => {
    useEffect( () => {
      getAllTasks()
      getTasks(allTasks)    
    }, [JSON.stringify(allTasks)])   

    const onCurrentPage = (pageNumber) => {
      getTasks(allTasks, pageSize, pageNumber)
    }
    
    return(
      <ToDo tasks={tasks} pageSize={pageSize} totalUsersCount={totalUsersCount} onCurrentPage={onCurrentPage}></ToDo>
    )
}

let mapStateToProps = (state) => {
  return {
    tasks: state.tasks.tasks,
    allTasks: state.tasks.allTasks,
    pageSize: state.tasks.pageSize,
    totalUsersCount: state.tasks.totalUsersCount
  }
}



export default connect(mapStateToProps, {getTasks, getAllTasks})(ToDoContainer)