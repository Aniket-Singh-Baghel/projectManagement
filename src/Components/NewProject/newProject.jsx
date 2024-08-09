import PropTypes from "prop-types";
import { useRef } from "react";
import InputBar from "./inputBar";
import Modal from "./Modal";
function NewProject({ onAdd }) {
  const modal = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSaveProject() {
    const enteredtitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    if (
      enteredtitle.trim() === "" ||
      enteredDescription.trim === "" ||
      enteredDueDate === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredtitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2>Invalid Input</h2>
        <p>Opps...... looks like you forgot to enter a value.</p>
        <p>make sure to provide a valid value for a every input field</p>
      </Modal>
      <div>
        <menu>
          <li>
            <button>Cancel</button>
          </li>
          <li>
            <button onClick={handleSaveProject}>Save</button>
          </li>
        </menu>
        <InputBar type="text" label="Title" ref={titleRef} />
        <InputBar label="Description" ref={descriptionRef} textarea />
        <InputBar type="date" label="Due Date" ref={dueDateRef} />
      </div>
    </>
  );
}

NewProject.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default NewProject;
