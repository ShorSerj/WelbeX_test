import React, {useRef, useState} from 'react';
import style from './Column.module.scss'

const Column = ({tasks, addTask}) => {
    const [addMode, setAddMode] = useState(false)
    const [content, setContent] = useState('')
    const textInput = useRef(null);

    const userId = tasks[0]?.userId

    const onContentChange = (e) =>{
        setContent(e.currentTarget.value)
    }

    const onAddTasks = (userId) =>{
        addTask(userId, content)
        setAddMode(false)
    }

    return(
        <div className={style.block}>
            <div className={style.header}>{`User: ${userId}`}</div>
            <div className={style.content__wrapper}>
                {
                    tasks.map((item) =>{
                        return <div className={style.task} key={item.id}> 
                        {item.title}
                        <span lassName={style.edit}>&#9998;</span>
                        { item.completed && <span>Completed</span>}
                        </div>
                    })  
                } 
                {addMode && 
                    <div className={style.task} onClick={()=>textInput.current.focus()} ref={textInput}>
                        <label htmlFor="taskText">{content}</label>
                        <textarea  autoFocus={true} id='taskText' type="text"  onChange={onContentChange} />
                        <button className={style.task__button}  onClick={()=>onAddTasks(userId)}>Добавить карту</button>
                    </div> 
                } 
            </div>
            <button className={style.addTask} onClick={()=>setAddMode(true)}>Добавить задачу</button>
        </div>
    )
}
export default Column