import React from "react";
import photo from "../Assets/no-projects.png";
import Button from "./Button";

export default function None({createOne}) {
  return (
    <div className="flex flex-col  items-center text-center  w-full mt-16 md:mt-20 md:ml-10 gap-7 md:w-2/3">
      <img src={photo} alt="Sorry, Empty" className="w-16 h-16" />
      <h2 className="text-xl font-bold text-darkBlue">No project selected</h2>
      <p className="text-xl font-bold text-darkBlue">
        Select a project or create one
      </p>
      <p>
        <Button onClick = {createOne}>Create one</Button>
      </p>
    </div>
  );
}
