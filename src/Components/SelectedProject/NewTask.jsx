import { useRef, useState } from "react";
import PropType from "prop-types";
import styles from "./SelectedProject.module.css";
import Modal from "../NewProject/Modal";
function NewTask({ onAddTask }) {
  const dialog = useRef();
  const [enteredTask, setEnteredTask] = useState("");
  function handleChange(e) {
    setEnteredTask(e.target.value);
  }
  function handleClick() {
    if (enteredTask.trim() === "") {
      dialog.current.open();
      return;
    }
    onAddTask(enteredTask);
    setEnteredTask("");
  }
  return (
    <div className={styles.newTaskContainer}>
      <Modal ref={dialog} buttonCaption="Close">
        <h2>Invalid Input</h2>
        <p>Opps...... looks like you forgot to enter a value.</p>
        <p>make sure to provide a valid value for a every input field</p>
      </Modal>
      <input type="text" onChange={handleChange} value={enteredTask} />
      <button onClick={handleClick}>Add taks</button>
    </div>
  );
}

NewTask.propTypes = {
  onAddTask: PropType.func.isRequired,
};

export default NewTask;
