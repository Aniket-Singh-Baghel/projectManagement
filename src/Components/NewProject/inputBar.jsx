import PropTypes from 'prop-types'

function InputBar({label, textarea, ...props}) {
  return (
    <p>
        <label htmlFor="">{label}</label>
        {textarea ? <textarea {...props}/> : <input/>}
    </p>
  )
}

InputBar.propTypes = {
    label: PropTypes.string.isRequired,
    textarea: PropTypes.bool,
  };

export default InputBar