import React from "react";

const Loader = () => {
  return (
    <div >
      <div className="flex flex-row gap-2">
        <div className="w-4 h-4 rounded-full bg-backBlue animate-bounce [animation-delay:.7s]"></div>
        <div className="w-4 h-4 rounded-full bg-backBlue animate-bounce [animation-delay:.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-backBlue animate-bounce [animation-delay:.7s]"></div>
      </div>
    </div>
  );
};

export default Loader;
