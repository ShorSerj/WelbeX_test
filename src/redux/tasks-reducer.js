import { todosAPI } from "../api/api"

const SET_TASKS = 'SET_TASKS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING'

let initialState = {
    tasks: [],
    pageSize: 4,
    // totalUsersCount: 1,
    // currentPage: 1,
    userId: 1
}

const tasksReducer = (state = initialState, action) => {


    switch (action.type) {
        case SET_TASKS:{
            return {...state, tasks: action.tasks}
        }
        case SET_CURRENT_PAGE:{
            return {...state, userId: action.userId}
        }



        case FOLLOW: 
            return {
                ...state,
                users: updateObjectInArray(state.users,action.userId, "id", {followed:true})
            }
        case UNFOLLOW: 
        return {
            ...state,
            users: updateObjectInArray(state.users,action.userId, "id", {followed:false})
        }
        case TOOGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default: return state
}

}

export const setTasks = (tasks) => ({type: SET_TASKS, tasks})
export const setCurrentPage = (userId) => ({type: SET_CURRENT_PAGE, userId})


export const followSucces = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const toogleIsFetching = (isFetching) => ({type: TOOGLE_IS_FETCHING, isFetching})

export const getTasks =  () => async dispatch => {
            let response = await todosAPI.getTasks()
            dispatch(setTasks(response.data))
}

    



export default tasksReducer