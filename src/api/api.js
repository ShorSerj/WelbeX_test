import * as axios from 'axios'


export const todosAPI = {
    getTasks() {
        return axios.get(
            `https://jsonplaceholder.typicode.com/todos`
          )
    },

    addTask(userId, title) {
        return axios.post(`https://jsonplaceholder.typicode.com/todos`, {userId, title})
    }
}
