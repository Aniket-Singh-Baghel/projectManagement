import { useState } from "react";
import ProjectSideBar from "./Components/ProjectSideBar/ProjectSideBar.jsx";
import NewProjectSelected from "./Components/newProjectSelected/NewProjectSelected.jsx";
import NewProject from "./Components/NewProject/newProject.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    projectStateId: undefined,
    projects: [],
  });
  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectStateId: null,
      };
    });
  }
  let content;
  if(projectState.projectStateId===null){
    content = <NewProject/>
  }
  else if(projectState.projectStateId===undefined){
    content = <NewProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main style={{ display: "flex" }}>
      <ProjectSideBar  onStartAddProject={handleStartAddProject}/>
      {content}
    </main>
  );
}

export default App;
