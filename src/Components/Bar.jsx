import React from "react";
import Button from './Button'

export default function Bar({ newProject, projects, onSelect }) {
  
  return (
    <nav className="flex flex-col w-full h-fit items-center md:items-start bg-blue md:w-3/12 md:h-full md:fle md:py-16 md:pl-10 gap-8 md:gap-14  ">
      <h1 className="text-lg md:text-2xl uppercase font-bold text-rose mt-4">
        Your Projects
      </h1>
      <div>
        <Button onClick={newProject}>+ New Project</Button>
      </div>
      <ul className="flex flex-row md:flex-col justify-evenly font-bold md:gap-4  mb-4 md:mb-0 flex-wrap w-[70%] md:w-[90%] ">
        {projects.map((project) => (
          <li
            key={project.id}
            className="hover:bg-darkBlue hover:rounded-md w-[7rem] md:w-full"
          >
            <button
              className="w-full md:text-start p-2 text-wrap text-rose  capitalize text-sm md:text-xl"
              onClick={() => {
                onSelect(project);
              }}
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
