import PropTypes from "prop-types";

function ProjectSideBar({ onStartAddProject, projects }) {
  return (
    <aside>
      <h2 className="text-4xl font-bold text-blue-500">Your Projects</h2>
      <div>
        <button onClick={onStartAddProject}>+ Add Project</button>
      </div>
      <ul>
        {projects.map((i) => (
          <li key={projects.id}>
            <button>{i.title}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
ProjectSideBar.propTypes = {
  onStartAddProject: PropTypes.func.isRequired,
  projects: PropTypes.array.isRequired,
};

export default ProjectSideBar;
