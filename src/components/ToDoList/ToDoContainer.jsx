import React, { useEffect } from 'react';
import ToDo from './ToDo.jsx'
import { connect } from 'react-redux'
import {getTasks} from '../../redux/tasks-reducer.js'


const ToDoContainer = ({getTasks, tasks}) => {
    useEffect( () => {
        getTasks()
    }, [])

    return(
      <ToDo tasks={tasks}/>
    )
}

let mapStateToProps = (state) => {
  return {
    tasks: state.tasks.tasks
  }
}



export default connect(mapStateToProps, {getTasks})(ToDoContainer)