import { EndPoint } from '../api/_api'
import { useQuery } from 'react-query'

export const useTasks = () => {

    const {data, isFetching} = useQuery(['tasks'], async () => {
        const response = await EndPoint.get()
        return response.data
    })

    return {data, isFetching}
}