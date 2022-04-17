

export class Task {
    constructor(data){
        this.id = data.id
        this.completed = data.completed || false
        this.name = data.name || "task"
    }

    get Template(){
        return `
        <span> <i class="mdi ${this.completed ? "mdi-circle-slice-8" : "mdi-circle-outline"} ">${this.name}</i></span>
        `
    }
}