import React from 'react';
import style from './Task.module.scss'

const Task = ({item, setEditMode, setContent, deleteTask, editMode, content, setFocus, onCloseForm, onAddTasks, onEditTasks, addMode}) => {
    const edit = editMode == item?.id
    const userId = item?.userId

    const onContentChange = (e) =>{
        setContent(e.currentTarget.value)
    }
    
    return (
        <>
            {edit && 
            <div className={style.task + ' ' +  style.newTask} onBlur={() => edit ? onCloseForm('edit') : null}> 
                <label htmlFor="taskText">
                    {content}
                    {focus && <span>&nbsp;</span>}
                </label>
                <input autoFocus={true} id='taskText' type="text"  onChange={onContentChange} 
                onFocus={()=> setFocus(true)} value={content}
                />
                <button className={style.task__button}  onClick={()=> addMode ? onAddTasks(userId) : onEditTasks(userId)}>{addMode ? 'Добавить карту' : 'Изменить карту'}</button>
            </div>}

            {!edit && 
            <div className={style.task} onBlur={() => onCloseFormEdit()}>
                <p>{item.title}</p>
                <span className={style.edit} onClick={()=> {
                    setEditMode(item.id)
                    setContent(item.title)
                }}>
                    &#9998; 
                </span>
                <span className={style.delete} onClick={()=>deleteTask(item.id)}>	
                    &#9249;
                </span>
                { item.completed && <span className={style.status}>Completed</span>}
            </div>} 
        </>             
    )
}
export default Task