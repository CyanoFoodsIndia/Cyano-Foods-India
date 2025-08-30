import React from "react";

export function Button({ className = "", children, ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-md font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}



