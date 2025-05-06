import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { TechProps } from "../../models/Types";
import "./Interface.css";

const Tech = ({ icon, text, isFlipCard = false }: TechProps) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  if (isFlipCard) {
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
  }

  return (
    <div className="tech">
      <img src={icon} alt={text} />
      <span>{text}</span>
    </div>
  );
};

export default Tech;
