import { FaTimes } from 'react-icons/fa'

const Task = ({task, onDelete, onReminder }) => {

  return (

    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onReminder(task.id)}
    >
      <h5>{task.text}  <FaTimes onClick={() => onDelete(task.id)} style={{color: 'red', cursor: 'pointer'}} /></h5>
      <hr />
      <small>{task.day}</small>
    </div>

  )
}

export default Task
