import noteImage from "../../assets/0e3321d22cae3e73c9546b1aca65aca1.png";
import PropTypes from "prop-types";
function NewProjectSelected({ onStartAddProject }) {
  return (
    <div
      style={{
        width: "70vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src={noteImage}
        alt="pape and note 3D"
        style={{ height: "5rem", width: "4rem" }}
      />
      <h2>No project Selected</h2>
      <p>Select a project or get started with anew one</p>
      <p>
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            padding: ".5rem",
            borderRadius: ".3rem",
          }}
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
