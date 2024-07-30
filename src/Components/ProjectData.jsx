import React from "react";
import Tasks from './Tasks'

export default function ProjectData({ selectedProject, setSelected, onDelete , setProjectList , projectList }) {
  const formatData = new Date(selectedProject.date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );
  
  function handleTasks(task) {
    const list = projectList;
    let indx = list.findIndex(element => element.id === selectedProject.id)
    list[indx].tasks = [ ...list[indx].tasks , task]
    setProjectList(list);
    setSelected({
      id: projectList[indx].id,
      title: projectList[indx].title,
      description: projectList[indx].description,
      date: projectList[indx].date,
      tasks: projectList[indx].tasks,
    });
  }
  return (
    <div className="flex flex-col w-full md:w-[55%] mt-16 md:mt-20 px-20 md:pl-10  gap-7 ">
      <header className="pb-4 border-b-2 border-darkBlue">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-3xl mb-2 text-darkBlue font-bold capitalize">
            {selectedProject.title}
          </h1>

          <button
            className="px-2 py-1 text-xs md:text-sm rounded-md bg-darkBlue text-offWhite font-bold hover:text-rose"
            onClick={() => onDelete(selectedProject.id)}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-blue">{formatData}</p>
        <p className="text-darkBlue whitespace-pre-wrap text-base md:text-lg text-wrap " >
          {selectedProject.description}
        </p>
      </header>
      <Tasks tasksList={selectedProject.tasks} onAddTask={handleTasks} />
    </div>
  );
}
