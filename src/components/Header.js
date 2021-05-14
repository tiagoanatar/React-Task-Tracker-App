import Button from './Button'

const Header = (props) => {

  return (

    <header className='header'>

    <div>
      <h1>{props.title}</h1>
      <h6>Hello {props.userName}</h6>
    </div>

    <Button text={props.showAddTask ? 'Close' : 'Add'} color={props.showAddTask ? 'red' : 'green'} onClick={props.addForm} />

    </header>
  )
}

// default props value
Header.defaultProps = {
  title: 'Task Manager',
  userName: 'Test Name',
}

export default Header
