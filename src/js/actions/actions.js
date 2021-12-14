import { ADD_TASK, DELETE_TASK, EDIT_TASK, CHANGE } from "../constants/actions-type"

export const addTask = (Task) =>{
    return{
        type: ADD_TASK,
        payload: Task
    }
}

export const deleteTask = (id)=>{
    return{
        type: DELETE_TASK,
        payload: id
    }
}

export const editTask = (payload)=>{
    return{
        type: EDIT_TASK,
        payload: payload
    }
}

export const changeDone = (payload)=>{
    return{
        type: CHANGE,
        payload: payload
    }
}