import { ReactNode } from "react";
import "./Icons.css";
import { Tooltip } from "@mui/material";

const SocialIcon = ({
  icon,
  link,
  tooltipText,
}: {
  icon: ReactNode;
  link: string;
  tooltipText: string;
}) => {
  const handleClick = (): void => {
    window.open(link, "_blank");
  };

  return (
    <Tooltip title={tooltipText} arrow>
      <div className="social-network" onClick={handleClick}>
        {icon}
      </div>
    </Tooltip>
  );
};

export default SocialIcon;
