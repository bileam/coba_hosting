const Button = ({ isdark, setDark }) => {
  return (
    <button
      className="fixed top-4 right-4 px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 dark:text-white transition"
      onClick={() => setDark(!isdark)}
    >
      {isdark ? "🌙" : "☀️"}
    </button>
  );
};

export default Button;
