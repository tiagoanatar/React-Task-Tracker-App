//import logo from './logo.svg'
//import './App.css'
import { useState, useEffect } from 'react' // useEffect - will load task on page load - is used to load data from API/Jason
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {

  const [showAddTask, setShowAddTask] = useState(false)

  const [taskData, setTasks] = useState([])


  // get data from server
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:3001/taskData')
    const data = await res.json()

    return data
  }

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:3001/taskData/${id}`)
    const data = await res.json()

    return data
  }

  // delete tasks
  // *** will delete the ID item if it is not different than the one clicked
  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:3001/taskData/${id}`, {
      method: 'DELETE',
    })
    //We should control the response status to decide if we will change the state or not.
    res.status === 200
      ? setTasks(taskData.filter((task) => task.id !== id))
      : alert('Error Deleting This Task')
  }

  // const deleteTask = (id) => {
  //   setTasks(
  //     taskData.filter((task) =>
  //       task.id !== id)
  //     )
  // }

  // change reminder
  // *** we copy/create new array, and change the value of 'reminder' to its oposite value

  const changeReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:3001/taskData/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })

    const data = await res.json()

    setTasks(
      taskData.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    )
  }

  // const changeReminder = (id) => {
  //   setTasks(
  //     taskData.map((task) =>
  //       task.id === id ? { ...task, reminder:
  //       !task.reminder } : task
  //     )
  //   )
  // }

  // add task information

  const addTask = async (task) => {
    const res = await fetch('http://localhost:3001/taskData', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()

    setTasks([...taskData, data])
  }

  // const addTask = (task) => {
  //   const id = Math.floor(Math.random() * 10000 + 1)
  //   const newTask = {id, ...task}
  //   setTasks([...taskData, newTask])
  // }

  return (
    <div className='bk'>
      <div className='container'>

            <Header addForm={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} />{/*react componenet*/}

            {showAddTask ? (<AddTask onAdd={addTask} />) : ('')}

            {taskData.length > 0 ? (
              <Tasks tasks={taskData} onDelete={deleteTask} onReminder={changeReminder} />
              ) : (
                'No Tasks Avalible'
              )
            }

      </div>
    </div>
  );
}

export default App;
