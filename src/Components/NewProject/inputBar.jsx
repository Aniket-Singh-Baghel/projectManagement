import PropTypes from "prop-types";
import { forwardRef } from "react";
import styles from "./NewProject.module.css";

const InputBar = forwardRef(function InputBar(
  { label, textarea, ...props },
  ref
) {
  return (
    <p className={styles.inputContainer}>
      <label htmlFor="">{label}</label>
      {textarea ? (
        <textarea {...props} ref={ref} className={styles.textarea} />
      ) : (
        <input ref={ref} {...props}  className={styles.input}/>
      )}
    </p>
  );
});

InputBar.propTypes = {
  label: PropTypes.string.isRequired,
  textarea: PropTypes.bool,
};

export default InputBar;
