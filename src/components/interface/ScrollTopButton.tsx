import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./Interface.css";
import { useEffect, useState } from "react";

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = (): void => {
    const scrollTop = document.documentElement.scrollTop;
    setIsVisible(scrollTop > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <div className="scroll-top-btn" onClick={() => window.scroll(0, 0)}>
        <KeyboardArrowUpIcon fontSize="large" color="primary" />
      </div>
    )
  );
};

export default ScrollTopButton;
