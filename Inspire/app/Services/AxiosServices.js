

//@ts-ignore
export const sandboxApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/",
    timeout: 8000
})

//@ts-ignore
export const todoApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/austin/todos/",
    timeout: 8000
})