export class Todo {
    constructor(data){
        this.id = data.id
        this.completed = data.completed
        this. user = data.user
        this.description = data.description 
    }

   get Template (){
        return `
        <div class="card justify-content-center">
            <h4>TodoList</h4>
            <li>first</li>
            <li>second</li>
            <li>third</li>
            <li>fourth</li>
          </div>
        `
    }
}