import { PhrasesTasks, StatusTasks, TasksStyled, S_Form } from "./style"
import { useState } from "react"
import { MdDelete } from "react-icons/md"
import { FaEdit } from "react-icons/fa"
import { useStatusTaskMutation, useTitleMutation, useDeleteTask } from "../../hooks/useTaskMutate"
import { useEffect } from "react"


export default function Tasks ({title, statusTask,  id}) {
    const [status, setStatus] = useState(statusTask)
    const [edit, setEdit] = useState(false)
    const [newTitle, setNewTitle] = useState('')
    const {mutate} = useStatusTaskMutation()
    const mutationTitle = useTitleMutation()
    const deleteTask = useDeleteTask()

    const taskStatus = {
        id: id,
        title: title,
        status: status
    }
    const taskTitle ={
        id: id,
        title: newTitle,
        status: status
    }
    const handleClickEdit = () => {
        setEdit(!edit)
    }

    const handleClickNewTitle = (event) => {
        event.preventDefault()
        mutationTitle.mutate(taskTitle)
        mutate(taskTitle)
        setEdit(!edit)
    }

    const handleClickDelete = () => {
        deleteTask.mutate(id)
    }

    useEffect(() => {
        mutate(taskStatus)
    }, [status])
    
    return(
        <>
            <S_Form edite={edit}>
                <input 
                    type="text" name="task" 
                    placeholder="Edite sua task..."
                    value={newTitle}
                    onChange={(event) => setNewTitle(event.target.value)}
                />
                <button onClick={handleClickNewTitle}>+</button>
            </S_Form>
            <TasksStyled edite={edit}>
                <div>
                    <PhrasesTasks>{title}</PhrasesTasks>
                </div>
                <div>
                    <StatusTasks value={status} onChange={(event) => {
                        return (
                            setStatus(event.target.value)
                        )
                    }}>
                        <option value="Pendente">Pendente</option>
                        <option value="Em andamento">Em andamento</option>
                        <option value="Finalizado">Finalizado</option>
                    </StatusTasks>
                    <button onClick={handleClickDelete}>
                        <MdDelete/>
                    </button>
                    <button onClick={handleClickEdit}>
                        <FaEdit/>
                    </button>
                </div>
            </TasksStyled>
        </>
    )
}