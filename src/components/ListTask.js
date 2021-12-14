import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'
import AddTask from './AddTask';
import './styleListCard.css'



const ListTask = () => {
    const task = useSelector(state => state.tasks.listTask)
    const [liste, setListe] = useState()

const isDone = () => {
    const mv = task.filter(elt=>elt.isDone == true);
    setListe(mv)
}

const notDone = () => {
    const mv = task.filter(elt=>elt.isDone == false);
    setListe(mv)
}

const All = () => {
    setListe(task)
}


    return (
        
        <div className='listTask'>
            <h1>To Do List</h1>
        <AddTask/>
        <div className='btns'>
        <button onClick={()=>All()}>All</button>
        <button onClick={()=>isDone()}>Done</button>
        <button onClick={()=>notDone()}>Not Done</button></div> 
        {liste != null ? liste.map(t => <Task key={t.id} {...t}/>) : null}
        {/* {task.map(t => <Task key={t.id} {...t}/>)} */}
        </div>
    )
}

export default ListTask
