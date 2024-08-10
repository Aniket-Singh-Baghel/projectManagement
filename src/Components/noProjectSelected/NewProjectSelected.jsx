import styles from "./NoProjectSelected.module.css";
import noteImage from "../../assets/0e3321d22cae3e73c9546b1aca65aca1.png";
import PropTypes from "prop-types";
function NewProjectSelected({ onStartAddProject }) {
  return (
    <div className={styles.container}>
      <img
        src={noteImage}
        alt="pape and note 3D"
      />
      <h2>No project Selected</h2>
      <p className={styles.instruction}>
        Select a project or get started with a new one
      </p>
      <p>
        <button
          onClick={onStartAddProject}
        >
          Create a new project
        </button>
      </p>
    </div>
  );
}

NewProjectSelected.propTypes = {
  onStartAddProject: PropTypes.func.isRequired,
};

export default NewProjectSelected;
