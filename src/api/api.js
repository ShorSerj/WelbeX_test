import * as axios from 'axios'

export const todosAPI = {
    getTasks() {
        return axios.get(
            `https://jsonplaceholder.typicode.com/todos`
          )
    }
}
