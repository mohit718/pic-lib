import React from "react";

export default function Loader() {
  return (
    <div class="flex items-center justify-center space-x-2 fixed h-screen w-screen">
      <div
        class="spinner-border animate-spin inline-block w-36 h-36 border-l-2 rounded-full"
        role="status"></div>
      <span className="absolute text-white font-semibold text-xl">
        Loading...
      </span>
    </div>
  );
}
