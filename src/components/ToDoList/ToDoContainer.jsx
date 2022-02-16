import React, { useEffect, useState } from 'react';
import ToDo from './ToDo.jsx'
import { connect } from 'react-redux'
import {getTasks} from '../../redux/tasks-reducer.js'

const ToDoContainer = ({getTasks, tasks, pageSize, totalUsersCount}) => {
    useEffect( () => {
      getTasks()    
    }, [])   
    
    return(
      <ToDo tasks={tasks} pageSize={pageSize} ></ToDo>
    )
}

let mapStateToProps = (state) => {
  return {
    tasks: state.tasks.tasks,
    pageSize: state.tasks.pageSize,
    totalUsersCount: state.tasks.totalUsersCount
  }
}



export default connect(mapStateToProps, {getTasks})(ToDoContainer)