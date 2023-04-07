import styled from "styled-components"

export const FormStyle = styled.form`
    height: 15vh;
    width: 90%;
    margin: auto;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export const InputForm = styled.input`
    width: 80%;
    flex: 1;
    padding: 15px;
    border: 1px solid #DDD;
    border-radius: 5px;
    outline: none;
    font-size: 1rem;
    font-weight: 600;
    background: var(--white);
`

export const ButtonForm = styled.button`
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
`
