import './App.css'
import { useState } from "react";
import ProjectSideBar from "./Components/ProjectSideBar/ProjectSideBar.jsx";
import NewProjectSelected from "./Components/newProjectSelected/NewProjectSelected.jsx";
import NewProject from "./Components/NewProject/newProject.jsx";
import SelectedProject from "./Components/SelectedProject/SelectedProject.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    projectStateId: undefined,
    projects: [],
    tasks: [],
  });

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectStateId: id,
      };
    });
    console.log(projectState);
  }

  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectStateId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.projectStateId
        ),
      };
    });
  }

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectStateId: null,
      };
    });
  }

  function handleAddTask(tasksData) {
    setProjectState((prevState) => {
      const newtask = {
        ...tasksData,
        taskData: tasksData,
        projectId:prevState.projectStateId, 
        id: Math.random(),
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newtask],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(
          (task) => task.id !== id
        ),
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        projectStateId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectStateId: undefined,
      };
    });
  }

  console.log(projectState);

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.projectStateId
  );

  let content = (
    <SelectedProject project={selectedProject} onDeleteProject={handleDeleteProject} tasks={projectState.tasks} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask}/>
  );
  if (projectState.projectStateId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectState.projectStateId === undefined) {
    content = <NewProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main>
      <ProjectSideBar
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
        projects={projectState.projects}
      />
      {content}
    </main>
  );
}

export default App;
