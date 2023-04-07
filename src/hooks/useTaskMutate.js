import { useQueryClient } from "react-query";
import { EndPoint } from "../api/_api";
import { useMutation } from "react-query";


const postTask = async (title) => {
    const response = EndPoint({
        method: 'post',
        headers: {'Content-Type':'application/json'},
        data: JSON.stringify(title)
    })
    return response
}

export const useTasksMutation = () => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: postTask,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['tasks'])
        }
    })
    
    return mutation
}

const UpdateStatus =  async(data) => {

    const {id, title, status} = data

    const response =  await EndPoint(`/${id}`, {
        method: 'put',
        headers: {'Content-Type':'application/json'},
        data: JSON.stringify({title, status})
    })
    return response
}

export const useStatusTaskMutation = () => {
    const queryClient = useQueryClient()
    const mudation = useMutation({
        mutationFn: UpdateStatus,
        onSuccess: () => {
            queryClient.invalidateQueries(['tasks'])
        }
    })
    return mudation
}

const UpdateTitle =  async(data) => {

    const {id, title, status} = data

    const response =  await EndPoint(`/${id}`, {
        method: 'put',
        headers: {'Content-Type':'application/json'},
        data: JSON.stringify({title, status})
    })
    return response
}

export const useTitleMutation = () => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: UpdateTitle,
        onSuccess: () => {
            queryClient.invalidateQueries(['tasks'])
        }
    })
    return mutation
}

const deleteTask = async (id) => {
    const response = await EndPoint(`/${id}`, {
        method: 'delete'
    })
}

export const useDeleteTask = () => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: deleteTask,
        onSuccess: () => {
            queryClient.invalidateQueries(['tasks'])
        }
    })
    return mutation
}