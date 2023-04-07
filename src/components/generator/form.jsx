import { ButtonForm, FormStyle, InputForm } from "./style"
import {useState} from "react"
import { useTasksMutation } from "../../hooks/useTaskMutate"


export default function Form () {
    const [task, setTesk] = useState('')
    const {mutate} = useTasksMutation()

    const dataTask = {
        title: task
    }
    
    const postTask = async (event) => {
        event.preventDefault()
        mutate(dataTask)
        setTesk('')
    }

    return(
        <>
            <FormStyle>
                <InputForm 
                    value={task}
                    onChange={(event) => setTesk(event.target.value)}
                    placeholder="Digite suas tarefas..." 
                />
                <ButtonForm onClick={postTask}>+</ButtonForm>
            </FormStyle>
        </>
    )
}