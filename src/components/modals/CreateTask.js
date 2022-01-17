import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'

const CreateTask = ({modal, toggle, save}) => {

    const [taskName, setTaskName] = useState('')
    const [taskDescription, setTaskDescription] = useState('')

    const changeHandler = (e) => {
      const {name, value} =e.target

      if (name === 'taskName') {
        setTaskName(value)
      }
      else{
        setTaskDescription(value)
      }
    }
    const handleSave = () =>{
      let taskObj = {}
      taskObj["Name"] = taskName
      taskObj["Description"] = taskDescription
      save(taskObj)
    }

    return ( 
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
          <form>
              <div className='form-group'>
                  <label>Task Name</label>
                <input type="text" className='form-control' name='taskName' value={taskName} onChange={changeHandler}></input>
              </div>
              <div className='form-group mt-2'>
                  <label>Description</label>
                  <textarea rows="5" className='form-control' name="taskDescription" value={taskDescription} onChange={changeHandler}></textarea>
              </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>Add</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
     );
}
 
export default CreateTask;