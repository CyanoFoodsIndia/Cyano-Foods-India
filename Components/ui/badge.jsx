import React from "react";

export function Badge({ className = "", children }) {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 ${className}`}>
      {children}
    </span>
  );
}



