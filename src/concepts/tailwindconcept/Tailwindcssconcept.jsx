import React from "react";

const Tailwindcssconcept = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="w-screen h-auto flex flex-wrap align-middle justify-around gap-25">
      {/* <h1 className='bg-[#12e012] text-orange-500 text-6xl  font-extrabold underline uppercase'>TailwindCssConcept</h1> */}
      {arr.map((ele, index) => {
        return (
          <div
            key={index}
            className="w-[300px] h-[300px] bg-gray-300 border-2 border-red-500 rounded-full flex items-center justify-center shadow-amber-400 cursor-pointer hover:bg-purple-300 hover:scale-105 transition-all duration-[1s] "
          >
            {ele}
          </div>
        );
      })}
    </div>
  );
};

export default Tailwindcssconcept;
