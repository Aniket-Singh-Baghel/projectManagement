import PropTypes from "prop-types";
import { useRef } from "react";
import InputBar from "./inputBar";
function NewProject({ onAdd }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSaveProject() {
    const enteredtitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    onAdd({
      title: enteredtitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
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
      <InputBar type="date" label="Due Date" ref={dueDateRef}/>
    </div>
  );
}

NewProject.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default NewProject;


