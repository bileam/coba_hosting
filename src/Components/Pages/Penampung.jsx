import { useState } from "react";

const Penampung = () => {
  const [isdark, setDark] = useState(false);

  return (
    <div data-theme={isdark ? "dark" : "light"}>
      <div
        className="min-h-screen bg-yellow-100 text-black 
                      dark:bg-black dark:text-white p-4"
      >
        <button
          onClick={() => setDark(!isdark)}
          className="px-4 py-2 bg-gray-300 dark:bg-gray-800 dark:text-white"
        >
          {isdark ? "Dark" : "Light"}
        </button>

        <h1 className="text-[50px] bg-primary dark:bg-primary-dark dark:text-white mt-4">
          testing dark mode
        </h1>
      </div>
    </div>
  );
};

export default Penampung;
