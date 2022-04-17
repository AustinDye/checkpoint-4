import { ProxyState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"
import { todoApi } from "./AxiosServices.js"



export class TodoServices {
    async setTodo(formData){
        const res = await todoApi.post('',formData)
        let newTodo = new Todo(res.data)
        ProxyState.task = [...ProxyState.task, newTodo]
        ProxyState.myList = newTodo
    }

      async getAllTodo(){
          const res = await todoApi.get('')
          console.log(res);
          res.data.forEach(todo => {
            const newTodo = new Todo(todo)
            ProxyState.task = [newTodo, ...ProxyState.task]
        });
        console.log( ProxyState.task );
      }
      async removeTodo(id){
        await todoApi.delete('' + id)
        ProxyState.task =  ProxyState.task.filter(t => t.id !== id)
      }

      async completeTodo(id){
        const index = ProxyState.task.findIndex(t => t.id == id)
        const checkTodo = ProxyState.task[index]
        checkTodo.completed = !checkTodo.completed
        ProxyState.task.splice(index, 1, checkTodo)
        ProxyState.task = ProxyState.task
        const res = await todoApi.put('' + checkTodo.id, checkTodo)
        console.log(res);
      }
    }

export const todoServices = new TodoServices()