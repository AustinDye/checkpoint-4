import { Todo } from "../Models/Todo.js";

export function getTodoForm (myTodo){
    myTodo = new Todo ({})
    return `
    
    <form onsubmit="app.todoController.handleSubmit('')">
    <div class="mb-3 d-flex justify-content-between">
        <div class="mb-3">
            <div>
                <label for="user" class="form-label">user</label>
                <textarea type="text" class="form-control" name="user" id="user"
                aria-describedby="user" placeholder="Name..." min="5" max="250" required ></textarea>
        </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn btn-primary"></button>
    </div>
  </form>
    
    `
}