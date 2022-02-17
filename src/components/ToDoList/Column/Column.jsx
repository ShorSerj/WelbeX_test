import React, {useState} from 'react';
import style from './Column.module.scss'

const Column = ({tasks, addTask, editTask, deleteTask}) => {
    const [addMode, setAddMode] = useState(false)
    const [focus, setFocus] = useState(true)
    // const [editMode, seteditMode] = useState(false)
    const [editMode, seteditMode] = useState(false)
    const [content, setContent] = useState('')

    const userId = tasks[0]?.userId
    
    const onContentChange = (e) =>{
        setContent(e.currentTarget.value)
    }

    const onAddTasks = (userId) =>{
        addTask(userId, content)
        setAddMode(false)
        setContent('')
    }

    const onEditTasks  = (userId) =>{
        editTask(userId, editMode, content)
        seteditMode(false)
        setContent('')
    }
    
    const onCloseForm = () => {
        setFocus(false)
        setTimeout(() => {
            setAddMode(false)
            setContent('')
            }, 200);
    }

    const onCloseFormEdit = () => {
        setFocus(false)
        setTimeout(() => {
            seteditMode(null)
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
                            return <div className={style.task} key={item.id}> 
                            <p>{item.title}</p>
                            <span className={style.edit} onClick={()=> {
                                seteditMode(true)
                                seteditMode(item.id)
                                setContent(item.title)
                            }}>&#9998;</span>
                            <span className={style.delete} onClick={()=>deleteTask(item.id)}>	
                            &#9249;</span>
                            { item.completed && <span className={style.status}>Completed</span>}
                            </div>
                        }else {
                            return <div className={style.task + ' ' + style.newTask} onBlur={() => onCloseFormEdit()} key={item.id}>
                                <label htmlFor="taskText">
                                    {content}
                                    {focus && <span>&nbsp;</span>}
                                </label>
                                <input autoFocus={true} id='taskText' type="text"  onChange={onContentChange} 
                                onFocus={()=> setFocus(true)} value={content}
                                />
                                <button className={style.task__button}  onClick={()=>onEditTasks(userId)}>Изменить карту</button>
                            </div> 
                        }
                        
                    })  
                } 
                {addMode && 
                    <div className={style.task + ' ' + style.newTask} onBlur={() => onCloseForm()} >
                        <label htmlFor="taskText">
                            {content}
                            {focus && <span>&nbsp;</span>}
                        </label>
                        <input autoFocus={true} id='taskText' type="text"  onChange={onContentChange} 
                        onFocus={()=> setFocus(true)}
                        />
                        <button className={style.task__button}  onClick={()=>onAddTasks(userId)}>Добавить карту</button>
                    </div> 
                } 
            </div>
            <button className={style.addTask} onClick={()=>setAddMode(true)}>Добавить задачу</button>
        </div>
    )
}
export default Column