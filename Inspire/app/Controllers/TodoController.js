import { ProxyState } from "../AppState.js";
import { getTodoForm } from "../assets/TodoForm.js";
import { todoServices } from "../Services/TodoServices.js";
import { Pop } from "../Utils/Pop.js";

async function _drawTodo(){
    let template = ''
    ProxyState.task.forEach(t => template += /*html*/ `<span class="fs-6"> <button class="btn" onclick="app.todoController.deleteTodo('${t.id}')"><i class="mdi   ${t.completed ? "mdi-circle-slice-8" : "mdi-circle-outline"} "></i></button>
    ${t.description}
    <button class="btn" onclick="app.todoController.deleteTodo('${t.id}')">
    <i class="mdi mdi-close take-away"></i>
    </button>
    </span>`)
    document.getElementById('todo-item').innerHTML = template
    
}


export class TodoController {
    constructor(){
        
        todoServices.getAllTodo()
        ProxyState.on('task', _drawTodo)
        ProxyState.on('myList', _drawTodo)
        
    }
    async setTodo(data){
        try {
            await todoServices.setTodo(data)
        }
        catch(error){
            console.error(error)
            Pop.toast(error.message, 'error')
        }
    }  

    async handleSubmit(id) {
        try {
          event.preventDefault()
          /**@type {HTMLFormElement} */
          // @ts-ignore
          const formElem = event.target
          const formData = {
            description: formElem.description.value,
        }
        if (id == 'undefined') {
            await todoServices.setTodo(formData)
          } else {
            formData.id = id
            await todoServices.setTodo(formData)
          }
          formElem.reset()
        } catch (error){
            console.error('[ADD_TODO_FORM_ERROR]', error)
            Pop.toast(error.message, 'error')
        }
      
    
        
      
    }

    async deleteTodo(id){
        await todoServices.removeTodo(id)

    }


}

