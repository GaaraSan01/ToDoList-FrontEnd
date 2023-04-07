import styled, { css } from "styled-components";

export const TasksStyled = styled.div`
    height: 100px;
    width: 85%;
    margin: 15px auto;

    background: transparent;
    border: solid 1.5px var(--verde);
    border-radius: 15px;
    padding: 20px;
    display: none;

    ${({edite}) => !edite && css`
        display: flex;
        align-items: center;
        justify-content: space-between;
    `}

    div{
        height: 100%;
        width: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;

        button{
            background-color: transparent;
            height: 100%;
            width: 50px;
            border: none;
            color: #FFF;
            font-size: 1.7rem;
            font-weight: 500;
            cursor: pointer;
            color: var(--white);
        }
    }
`

export const PhrasesTasks = styled.p`
    color: var(--white);
    font-size: 1.2rem;
`

export const StatusTasks = styled.select`
    width: 150px;
    border: none;
    padding: 10px;
    border-radius: 8px;
    font-weight: 600;
    text-transform: capitalize;
    background-color: #ebebeb;
`

export const S_Form = styled.form`
    height: 100px;
    width: 85%;
    margin: 15px auto;

    background: transparent;
    border: solid 1.5px var(--verde);
    border-radius: 15px;
    padding: 20px;
    
    height: 100px;
    width: 85%;
    margin: 15px auto;

    background: transparent;
    border: solid 1.5px var(--verde);
    border-radius: 15px;
    padding: 20px;
    display: none;

    
   ${({edite}) => edite && css`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    `}
    
    input{
        width: 80%;
        flex: 1;
        padding: 15px;
        border: 1px solid #DDD;
        border-radius: 5px;
        outline: none;
        font-size: 1rem;
        font-weight: 600;
        background: var(--white);
    }
    button{
        background-color: var(--verde);
        height: 50px;
        width: 50px;
        border: none;
        border-radius: 5px;
        color: #FFF;
        font-size: 1.7rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        cursor: pointer;
    }
`