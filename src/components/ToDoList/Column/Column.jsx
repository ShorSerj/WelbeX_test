import React, {useState, useEffect} from 'react';
import style from './Column.module.scss'
import Task from './Task/Task.jsx';

const Column = ({tasks, addTask, editTask, deleteTask}) => {
    const [addMode, setAddMode] = useState(false)
    const [focus, setFocus] = useState(true)
    const [editMode, setEditMode] = useState(false)
    const [content, setContent] = useState('')
   
    const userId = tasks[0]?.userId

    const onAddTasks = (userId) =>{
        addTask(userId, content)
        setAddMode(false)
        setContent('')
    }

    const onEditTasks  = (userId) =>{
        editTask(userId, editMode, content)
        setEditMode(false)
        setContent('')
    }
    
    const onCloseForm = (mode) => {
        setFocus(false)
        setTimeout(() => {
            mode == 'edit' ? setEditMode(null) : setAddMode(false)
            setContent('')
            }, 200);
    }    

    return(
        <div className={style.block}>
            <div className={style.header}>{`User: ${userId}`}</div>
            <div className={style.content__wrapper}>
                {
                    tasks.map((item) =>{
                        if(editMode !== item.id){
                            return <Task setEditMode={setEditMode} setContent={setContent} deleteTask={deleteTask} item={item} key={item.id}/>
                        }else {
                            return <Task setEditMode={setEditMode} setContent={setContent} deleteTask={deleteTask} item={item} key={item.id} editMode={editMode} content={content} setFocus={setFocus} onCloseForm={onCloseForm} onAddTasks={onAddTasks} onEditTasks={onEditTasks}/>
                        } 
                    })  
                } 
                {addMode && 
                    <Task addMode={addMode} setFocus={setFocus} setContent={setContent} content={content} onCloseForm={onCloseForm} onAddTasks={onAddTasks}/>
                }
            </div>
            <button className={style.addTask} onClick={()=>setAddMode(true)}>Добавить задачу</button>
        </div>
    )
}
export default Column