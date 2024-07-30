import React, { useRef } from "react";
import Alert from "./Alert";

import Input from "./Input";

export default function NewProject({ cancel, onAdd }) {
  const title = useRef(null);
  const description = useRef(null);
  const date = useRef(null);
  const alertRef = useRef(null);

  function handleSave() {
    const Title = title.current.value;
    const Description = description.current.value;
    const Date = date.current.value;

    if (
      Title.trim() === "" ||
      Description.trim() === "" ||
      Date.trim() === ""
    ) {
      alertRef.current.open();
      return;
    }

    onAdd({
      id: Math.random(),
      title: Title,
      description: Description,
      date: Date,
      tasks: [],
    });
  }
  return (
    <>
      <Alert ref={alertRef} buttonCaption="Tmm" />
      <div className="flex flex-col w-full md:w-[55%] mt-16 md:mt-20 px-20 md:pl-10  gap-7 ">
        <menu className="flex flex-row gap-6 items-center justify-end">
          <li>
            <button
              className="font-bold text-xs md:text-base text-darkBlue"
              onClick={cancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-4 py-2 text-xs md:text-base rounded-md bg-darkBlue text-offWhite font-bold hover:text-rose"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>

        <div className="flex flex-col gap-6">
          <Input ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input ref={date} label="Due Date" type="date" />
        </div>
      </div>
    </>
  );
}
