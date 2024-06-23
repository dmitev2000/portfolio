import { useState } from "react";
import "./Interface.css";
import ReactCardFlip from "react-card-flip";

const Tech = ({ icon, text }: { icon: string; text: string }) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="tech">
          <img src={icon} alt={text} />
          <span>{text}</span>
        </div>

        <div className="tech">Flipped</div>
      </ReactCardFlip>
    </div>
  );
};

export default Tech;
