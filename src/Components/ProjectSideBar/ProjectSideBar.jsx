import PropTypes from "prop-types";

function ProjectSideBar({ onStartAddProject, projects,onSelectProject }) {
  return (
    <aside>
      <h2 className="text-4xl font-bold text-blue-500">Your Projects</h2>
      <div>
        <button onClick={onStartAddProject}>+ Add Project</button>
      </div>
      <ul>
        {projects.map((project,index) => (
          <li key={index}>
            <button onClick={()=>onSelectProject(project.id)}>{project.title}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
ProjectSideBar.propTypes = {
  onStartAddProject: PropTypes.func.isRequired,
  onSelectProject:PropTypes.func.isRequired,
  projects: PropTypes.array.isRequired,
};

export default ProjectSideBar;
