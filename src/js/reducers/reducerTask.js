import {v4 as uuidv4} from 'uuid';
import { ADD_TASK, CHANGE, DELETE_TASK, EDIT_TASK} from '../constants/actions-type';

const initialState = {
    listTask : [{
        id: uuidv4(),
        description: "révision algo",
        isDone: true
    }]
}




const reducerTask=(state=initialState, {type, payload})=>{
    switch (type) {
        case ADD_TASK: return{...state, listTask:[...state.listTask,payload]}
        case DELETE_TASK: return{...state, listTask: state.listTask.filter(elt=>elt.id !== payload)}
        case EDIT_TASK: return{...state, listTask:state.listTask.map((elt)=> 
            elt.id === payload.id ? { ...elt, description: payload.description } : elt)}
        case CHANGE: return{...state, listTask:state.listTask.map((elt)=> 
            elt.id === payload ? { ...elt, isDone: !elt.isDone } : elt)}
        default:
            return state;
    }
}
export default reducerTask;