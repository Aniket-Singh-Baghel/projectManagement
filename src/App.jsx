import "./App.css";
import { useState } from "react";
import ProjectSideBar from "./Components/ProjectSideBar/ProjectSideBar.jsx";
import NewProjectSelected from "./Components/noProjectSelected/NewProjectSelected.jsx";
import NewProject from "./Components/NewProject/newProject.jsx";
import SelectedProject from "./Components/SelectedProject/SelectedProject.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    projectStateId: undefined,
    projects: [],
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

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectStateId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
        tasks: [],
      };
      return {
        ...prevState,
        projectStateId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
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

  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectStateId: undefined,
      };
    });
  }


  function handleAddTask(taskData) {
    setProjectState((prevState) => {
      const updatedProjects = prevState.projects.map((project) => {
        if (project.id === prevState.projectStateId) {
          return {
            ...project,
            tasks: [...project.tasks, { id: Math.random(), taskData }],
          };
        }
        return project;
      });

      return {
        ...prevState, 
        projects: updatedProjects,
      };
    });
  }

  function handleDeleteTask(taskId) {
    setProjectState((prevState) => {
      const updatedProjects = prevState.projects.map((project) => {
        if (project.id === prevState.projectStateId) {
          return {
            ...project,
            tasks: project.tasks.filter((task) => task.id !== taskId),
          };
        }
        return project;
      });
  
      return {
        ...prevState,
        projects: updatedProjects,
      };
    });
  }
  
  console.log(projectState);

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.projectStateId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDeleteProject={handleDeleteProject}
      tasks={projectState.tasks}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
    />
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
        projectStateId={projectState.projectStateId}
      />
      {content}
    </main>
  );
}

export default App;
