import { useState } from "react";

import "./App.css";

import Testing from "./Components/Pages/Testing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Testing />} />
    //   </Routes>
    // </Router>
    <Testing />
  );
};

export default App;
