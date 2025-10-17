import React from "react";
import { Loader } from "lucide-react";

export default function SimpleLoading({ className }) {
  return (
    <div className={`flex items-center justify-center  ${className}`}>
      <Loader className="w-10 h-10 animate-spin text-amber-600" />
      <span className="ml-2 text-amber-600">Loading...</span>
    </div>
  );
}
