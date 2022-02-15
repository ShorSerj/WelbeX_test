import React, { useEffect, useState } from 'react';
import ToDo from './ToDo.jsx'
import { connect } from 'react-redux'
import {getTasks, setTasks} from '../../redux/tasks-reducer.js'
import pageContent from '../common/pageContent/pageContent.js'

const ToDoContainer = ({getTasks, tasks, pageSize, setTasks, ...props}) => {
    useEffect( () => {
      getTasks() 
       
    }, [])    
    setTasks(pageContent(tasks))   
    return(
      <ToDo  pageSize={pageSize} ></ToDo>
    )
}

let mapStateToProps = (state) => {
  return {
    tasks: state.tasks.tasks,
    pageSize: state.tasks.pageSize,
  }
}



export default connect(mapStateToProps, {getTasks, setTasks})(ToDoContainer)