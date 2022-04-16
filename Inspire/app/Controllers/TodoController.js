import { ProxyState } from "../AppState.js";
import { getTodoForm } from "../assets/TodoForm.js";
import { todoServices } from "../Services/TodoServices.js";
import { Pop } from "../Utils/Pop.js";

async function _drawTodo(){
    const todo = ProxyState.myList
    let template = todo.Template
    document.getElementById('myList').innerHTML = template
    
}


export class TodoController {
    constructor(){
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

    async handleSubmit() {
        try {
          event.preventDefault()
          /**@type {HTMLFormElement} */
          // @ts-ignore
          const formElem = event.target
          const formData = {
            user: formElem.user.value,
            complete: formElem.complete.value,
            description: formElem.description.value,
        }
        this.setTodo(formData)
        formElem.reset()
        } catch (error){
            console.error('[ADD_TODO_FORM_ERROR]', error)
            Pop.toast(error.message, 'error')
        }
        
      // @ts-ignore
      bootstrap.Modal.getOrCreateInstance(document.getElementById('add-todo-modal')).hide()
      
    }

    openForm(){
        
        document.getElementById('add-modal-form-slot').innerHTML = getTodoForm()
    }

    drawTodo(){
        _drawTodo()
     
    }
}
