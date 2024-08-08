import PropTypes from 'prop-types';

function ProjectSideBar({onStartAddProject}) {
  return (
    <aside>
        <h2 className="text-4xl font-bold text-blue-500">Your Projects</h2>
      <div>
        <button onClick={onStartAddProject}>+ Add Project</button>
      </div>
      <ul></ul>
    </aside>
  );
}
ProjectSideBar.propTypes = {
  onStartAddProject:PropTypes.func.isRequired
};

export default ProjectSideBar;
