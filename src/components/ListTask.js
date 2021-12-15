import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'
import AddTask from './AddTask';
import './styleListCard.css'



const ListTask = () => {
    const task = useSelector(state => state.tasks.listTask)
    const [search, setSearch] = useState('all')


    return (
        
        <div className='listTask'>
            <h1>To Do List</h1>
        <AddTask/>
        <div className='btns'>
        <button onClick={()=>setSearch('all')}>All</button>
        <button onClick={()=>setSearch('done')}>Done</button>
        <button onClick={()=>setSearch('notdone')}>Not Done</button></div> 
        {task.filter(el=>(
            search==='all' ? el : search==='done' ? el.isDone : !el.isDone
        )).map(t => <Task key={t.id} {...t}/>)}
        </div>
    )
}

export default ListTask
