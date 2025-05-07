import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useEffect, useState } from "react";
import "./Interface.css";
import { Tooltip } from "@mui/material";

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
      <Tooltip title="Scroll to top" placement="top" arrow>
        <div className="scroll-top-btn" onClick={() => window.scroll(0, 0)}>
          <KeyboardArrowUpIcon fontSize="large" color="primary" />
        </div>
      </Tooltip>
    )
  );
};

export default ScrollTopButton;
