import React, { useState } from "react";
import Bar from "./Components/Bar";
import NewProject from "./Components/NewProject";
import None from "./Components/None";
import ProjectData from "./Components/ProjectData";
import "./App.css";

function App() {
  const [projectList, setProjectList] = useState([]);
  const [newProject, setNewProject] = useState(false);
  const [isSelect, setIsSelect] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  let content;

  function setCreateOne() {
    setNewProject(true);
    setIsSelect(false);
  }

  function handelCancel() {
    setNewProject(false);
    setIsSelect(false);
  }

  function handleAddProject(project) {
    setProjectList((prevData) => [...prevData, project]);

    handelCancel();
  }

  function handleSelectedProject(project) {
    setSelectedProject({
      id: project.id,
      title: project.title,
      description: project.description,
      date: project.date,
      tasks: project.tasks,
    });
    setIsSelect(true);
    setNewProject(false);
  }

  function handleDelete(id) {
    setProjectList(projectList.filter((item) => item.id !== id));
    handelCancel();
  }

  if (newProject && !isSelect) {
    content = <NewProject cancel={handelCancel} onAdd={handleAddProject} />;
  } else if (!newProject && !isSelect) {
    content = <None createOne={setCreateOne} />;
  } else if (!newProject && isSelect) {
    content = (
      <ProjectData
        selectedProject={selectedProject}
        onDelete={handleDelete}
        setProjectList={setProjectList}
        projectList={projectList}
        setSelected={setSelectedProject}
      />
    );
  }

  // console.log(projectList)

  return (
    <main className="flex  bg-offWhite flex-col md:flex-row w-full h-dvh ">
      <Bar
        newProject={setCreateOne}
        projects={projectList}
        onSelect={handleSelectedProject}
      />
      {content}
    </main>
  );
}

export default App;
