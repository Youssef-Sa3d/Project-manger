import React, {useRef} from "react";

export default function Tasks({ tasksList , onAddTask  }) {
  const taskRef = useRef(null);
  
  function handleAddTask() {
    if (taskRef.current.value.trim() === "") {
      return;
    }
    const task = taskRef.current.value;

    onAddTask({
      id: Math.random(),
      task: task
    });
    taskRef.current.value = "";
  }
  return (
    <div>
      <div className="flex flex-row justify-between">
        <input
          ref={taskRef}
          className="w-[80%] py-1 px-3 border-b-2 rounded-sm placeholder-darkBlue/70 text-darkBlue  bg-rose focus:outline-none focus:border-blue"
          placeholder="Task"
        ></input>
        <button onClick={handleAddTask} className="px-2 py-1 md:py-2 text-xs md:text-sm rounded-md bg-darkBlue text-offWhite font-bold hover:text-rose">
          + Add
        </button>
      </div>

      <ul className="w-full mt-4 flex flex-col">
        {tasksList.map((task) => (
          <li
            key={task.id}
            className="px-1 py-2 w-[80%] text-wrap text-darkBlue text-base md:text-lg font-semibold "
          >
            <p>{task.task}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
