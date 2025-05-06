import { Route, Routes } from "react-router-dom";
import NotImplemented from "./components/NotImplemented";
import Portfolio from "./components/Portfolio";
import "./App.css";

function App() {
  document.addEventListener('click', (event) => {
    const navToggler: HTMLInputElement | null = document.getElementById('nav-toggler') as HTMLInputElement;
    const mobileNav = document.getElementById('mobile-nav');
    
    if (!mobileNav || !navToggler) return;

    const isClickInside = mobileNav.contains(event.target as Node) || navToggler.contains(event.target as Node);
    if (!isClickInside) {
      navToggler.checked = false;
    }
  });

  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="*" element={<NotImplemented />} />
    </Routes>
  );
}

export default App;
