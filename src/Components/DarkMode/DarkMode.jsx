const DarkMode = ({ isdark }) => {
  return (
    <h1 className="text-[100px] bg-primary dark:bg-primary-dark dark:text-white ">
      Ini adalah Dark Mode (mode sekarang: {isdark ? "Dark" : "Light"})
    </h1>
  );
};

export default DarkMode;
