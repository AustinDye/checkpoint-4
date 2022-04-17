
export class Todo {
    constructor(data){
        this.id = data.id
        this.completed = data.completed || false
        this.description = data.description
        
    }

}