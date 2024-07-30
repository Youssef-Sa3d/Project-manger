import React, { forwardRef } from "react";

const Input = forwardRef( function Input({ label, textarea, ...props } , ref) {
  return (
    <p className="flex flex-col text-darkBlue">
      <label className="uppercase text-md">{label}</label>
      {textarea ? (
        <textarea
          className="w-full p-2 border-b-2 rounded-sm  bg-rose focus:outline-none focus:border-blue"
          {...props}
          ref={ref}
        ></textarea>
      ) : (
        <input
          className="w-full p-2 border-b-2 rounded-sm  bg-rose focus:outline-none focus:border-blue"
          {...props}
          ref={ref}
        ></input>
      )}
    </p>
  );
})
export default Input;