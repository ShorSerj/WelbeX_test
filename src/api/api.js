import * as axios from 'axios'


export const todosAPI = {
    getTasks() {
        return axios.get(
            `https://jsonplaceholder.typicode.com/todos`
          )
    },

    addTask(userId, title) {
        return axios.post(`https://jsonplaceholder.typicode.com/todos`, {userId, title})
    },

    editTask(userId, id, title) {
        return axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {userId, id,title})
    },

    deleteTask(id) {
        return axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    }
}
