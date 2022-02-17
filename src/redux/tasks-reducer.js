import { todosAPI } from "../api/api"
import paginatorTasks from "./paginatorTasks.js"

const SET_TASKS = 'SET_TASKS'
const SET_ALL_TASKS = 'SET_ALL_TASKS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING'

let initialState = {
    allTasks: [],
    tasks: [],
    pageSize: 5,
    totalUsersCount: 1,
    currentPage: 1,
}

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_TASKS:{
            return {...state, allTasks: action.tasks}
        }
        case SET_TASKS:{
            return {...state, tasks: action.tasks}
        }
        case SET_CURRENT_PAGE:{
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        default: return state
    }
}

export const setAllTasks = (tasks) => ({type: SET_ALL_TASKS, tasks})
export const setTasks = (tasks) => ({type: SET_TASKS, tasks})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count})

export const getAllTasks = () => async dispatch => {
    let response = await todosAPI.getTasks()
    dispatch(setAllTasks(response.data))
}

export const getTasks = (allTasks, pageSize=5, currentPage) => dispatch => {
    dispatch(setCurrentPage(currentPage))
    let data = paginatorTasks(allTasks, pageSize, currentPage)
    dispatch(setTasks(data.tasksArr))
    dispatch(setTotalUsersCount(data.count))
}

export const addTask = (userId, title) => async dispatch => {
    let response = await todosAPI.addTask(userId, title)
    alert('Карточка создана ' + JSON.stringify(response.data))
}

export default tasksReducer