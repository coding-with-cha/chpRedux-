import {Modal} from 'react-bootstrap'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {v4 as uuidv4} from 'uuid';
import {addTask} from '../js/actions/actions'

function AddTask() {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [description, setDescription] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTask({id:uuidv4(), description:description, isDone:false}))
        handleClose()
    }
    
    return (

      
      <>
      <div className='btnAdd'>
        <button variant="primary" onClick={handleShow} className='btnAdd'>
          Add Task
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
        </button></div>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
                <input type="text" onChange={(e)=>{setDescription(e.target.value)}} placeholder="Task description" required/>
                <button type="submit" onClick={handleSubmit}>Add Task</button>
            </form>
          </Modal.Body>
          
        </Modal>
      </>
    );
  }
  
export default AddTask