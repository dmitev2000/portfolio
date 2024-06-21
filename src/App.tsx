import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import "./App.css";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
import Experience from "./components/Experience";
import NotImplemented from "./components/NotImplemented";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} /> */}
      <Route path="/experience" element={<Experience />} />
      <Route path="*" element={<NotImplemented />} />
    </Routes>
  );
}

export default App;
