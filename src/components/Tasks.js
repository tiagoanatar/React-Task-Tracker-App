import Task from './Task'

const Tasks = ({ tasks, onDelete, onReminder }) => {

  return (

    <div className='tasks'>
      {tasks.map((eachTask) => ( // react list
        <Task key={eachTask.id}
              task={eachTask}
              onDelete={onDelete}
              onReminder={onReminder} />
      )
      )}
    </div>

  )
}

export default Tasks
