import { useState } from "react";
import { ClientInfo } from "../../models/Calsses";
import ReactCardFlip from "react-card-flip";
import "./Interface.css";
import { Button } from "@mui/material";
import { openUrl } from "../../utils/shared/functions";

const ClientItem = ({ clientInfo }: { clientInfo: ClientInfo }) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div
          className="client-item"
          style={{ backgroundImage: `url(${clientInfo.logo})` }}
        ></div>

        <div className="client-item">
          <h3>{clientInfo.name}</h3>
          <span>{clientInfo.description}</span>
          <Button
            variant="contained"
            className="bottom"
            onClick={() => {
              openUrl(clientInfo.url);
            }}
          >
            Visit
          </Button>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default ClientItem;
