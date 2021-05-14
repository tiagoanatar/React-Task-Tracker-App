import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
  return (

    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className='btn'
    >
      {text}
    </button>

  )
}

// default props value
Button.defaultProps = {
  color: 'black',
  text: 'Submit', // props feeded by variable
}

// define data type of props
Button.propTypes = {
  text: PropTypes.string.isRequired, // isRequired force the input of information
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
