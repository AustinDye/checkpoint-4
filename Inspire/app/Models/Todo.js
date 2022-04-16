export class Todo {
    constructor(data){
        this.id = data.id
        this.completed = data.completed
        this. user = data.user
        this.description = data.description 
    }

   get Template (){
        return `
       
        `
    }
}