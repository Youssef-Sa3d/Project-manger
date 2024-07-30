import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Alert = forwardRef(function Alert({ buttonCaption }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialog}
      className=" h-[30%] mt-[50%] ml-[35%] md:mt-[20%] md:ml-[40%]  p-6 md:p-8 rounded-md shadow-lg backdrop:bg-darkBlue/50 bg-offWhite  w-[15em] md:w-[20em] text-xs md:text-base"
    >
      <div className="w-full h-full flex flex-col justify-evenly">
        <h1 className="font-extrabold text-darkBlue text-lg md:text-2xl">Oops..!</h1>
        <p className=" text-darkBlue font-medium">There's something wrong. </p>
        <p className=" text-darkBlue font-medium">Fill the empty fields, please!</p>
        <form method="dialog" className="w-full flex justify-end ">
          <button className="px-2 py-1 text-xs md:text-base rounded-md bg-darkBlue text-offWhite font-bold hover:text-rose">
            {buttonCaption}
          </button>
        </form>
      </div>
    </dialog>,
    document.getElementById("root-alert")
  );
});

export default Alert;
