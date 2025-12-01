import { useState } from "react";

const Testing = () => {
  const [isDark, setDark] = useState(false);
  return (
    <div className={`${isDark ? "dark" : ""}`}>
      <div className="h-screen border bg-primary  dark:bg-primary-dark flex items-center justify-center">
        <div className="flex flex-col items-center">
          <button
            onClick={() => setDark(!isDark)}
            className=" text-t-black dark:text-t-white p-4 border shadow-amber-500 shadow-2xl scale-125"
          >
            {isDark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="26px"
                fill="#FFFF00"
              >
                <path d="M440-760v-160h80v160h-80Zm266 110-55-55 112-115 56 57-113 113Zm54 210v-80h160v80H760ZM440-40v-160h80v160h-80ZM254-652 140-763l57-56 113 113-56 54Zm508 512L651-255l54-54 114 110-57 59ZM40-440v-80h160v80H40Zm157 300-56-57 112-112 29 27 29 28-114 114Zm283-100q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="26px"
                fill="#FFFF00"
              >
                <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
              </svg>
            )}
          </button>
          <h1 className="mt-5 dark:text-t-white text-3xl text-t-black ">
            MODE {isDark ? "DARK" : "BLUE"} bileam mangalla
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Testing;
