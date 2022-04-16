import { ProxyState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"
import { todoApi } from "./AxiosServices.js"



export class TodoServices {
    async setTodo(formData){
        const res = await todoApi.post('',formData)
        let newTodo = new Todo(res.data)
        ProxyState.todoLists = [...ProxyState.todoLists, newTodo]
        ProxyState.myList = newTodo
    }
    async addTodo(formData) {
        const res = await todoApi.post('myList', formData)
        const newCar = new Todo(res.data)
        ProxyState.myList = [newCar, ...ProxyState.myList]
      }
}

export const todoServices = new TodoServices()