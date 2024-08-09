import PropTypes from "prop-types";
import { forwardRef } from "react";

const InputBar = forwardRef(function InputBar(
  { label, textarea, ...props },
  ref
) {
  return (
    <p>
      <label htmlFor="">{label}</label>
      {textarea ? <textarea {...props} ref={ref} /> : <input ref={ref} {...props}/>}
    </p>
  );
});

InputBar.propTypes = {
  label: PropTypes.string.isRequired,
  textarea: PropTypes.bool,
};

export default InputBar;


