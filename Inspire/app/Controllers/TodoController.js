import { ProxyState } from "../AppState.js";
import { todoServices } from "../Services/TodoServices.js";
import { Pop } from "../Utils/Pop.js";

async function _drawTodo(){
    const date = new Date();
    let template = ''

    ProxyState.task.forEach(t => template += 
    /*html*/ 
    `<span class="">
        <button class="" onclick="app.todoController.checkTodo('${t.id}')"><i class="mdi   ${t.completed ? "mdi-checkbox-intermediate" : "mdi-checkbox-blank-outline"} todo-icon"></i></button>
            ${t.description}
        <button class="" onclick="app.todoController.deleteTodo('${t.id}')"><i class="mdi mdi-close take-away"></i></button>
    </span>`)

    document.getElementById('todo-item').innerHTML = template
    document.getElementById('date').innerHTML = `${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`
    
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
            console.error('[FORM_ERROR]', error)
            Pop.toast(error.message, 'error')

        }
    
    }

    async checkTodo(id){
        await todoServices.completeTodo(id)
        _drawTodo()
        
    }

    async deleteTodo(id){
     try{
        if (await Pop.confirm()) {
            await todoServices.removeTodo(id)

        }
        } catch (error) {
            console.error(error)
                Pop.toast(error.message, "error")

        }

    }

    


}

