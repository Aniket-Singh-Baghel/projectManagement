import PropTypes from "prop-types";
import Styles from './ProjectSideBar.module.css'
function ProjectSideBar({ onStartAddProject, projects,onSelectProject }) {
  return (
    <aside>
      <h2 className={Styles.subject}>Your Projects</h2>
      <div>
        <button className={Styles.addProjectButton} onClick={onStartAddProject}>+ Add Project</button>
      </div>
      <ul className={Styles.listWrapper}>
        {projects.map((project,index) => (
          <li key={index} className={Styles.listItem}>
            <button className={Styles.projectTitle} onClick={()=>onSelectProject(project.id)}>{project.title}</button>
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
