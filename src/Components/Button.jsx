import React from "react";

export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 text-xs md:text-base rounded-md bg-rose text-darkBlue font-bold hover:text-blue"
      {...props}
    >
      {children}
    </button>
  );
}
