import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Flex from "./Components/pembelajaran1/Flex";
import DarkMode from "./Components/DarkMode/DarkMode";
import Penampung from "./Components/Pages/Penampung";
import Testing from "./Components/Pages/Testing";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <Flex /> */}
      {/* <DarkMode /> */}
      {/* <Penampung /> */}
      <Testing />
    </div>
  );
};

export default App;
