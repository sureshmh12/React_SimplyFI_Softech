import React from "react";

const App = () => {
  return (
    <div className="bg-black h-screen flex items-center justify-center">
      {/* Container */}
      <div className="relative w-fit">
        <div className="w-[300px] h-[300px] rotate-[-45deg] relative text-white text-[32px] flex items-center justify-center flex-col">
          <div className="absolute rotate-45">
            <p>
              HTML<span className="text-orange-500">&</span>CSS
            </p>
            <p className="text-[14px]">design and build websites</p>
          </div>
          <div className="bg-red-500/50 h-10 w-full absolute top-0 z-0"></div>
          <div className="bg-blue-500/50 w-10 h-full absolute right-0 z-10"></div>
          <div className="bg-green-500/50 h-10 w-full absolute bottom-0 z-20"></div>
          <div className="bg-yellow-500/50 w-10 h-full absolute left-0 z-30"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
