import axios from "axios"

export const EndPoint = axios.create({
    baseURL: "http://localhost:3000/task"
})

