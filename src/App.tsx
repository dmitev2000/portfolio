import { Route, Routes } from "react-router-dom";
import NotImplemented from "./components/NotImplemented";
import Portfolio from "./components/Portfolio";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="*" element={<NotImplemented />} />
    </Routes>
  );
}

export default App;
