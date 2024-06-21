import "./Interface.css";

const Tech = ({
  icon,
  text,
}: {
  icon: string;
  text: string;
}) => {
  return (
    <div className="tech">
      <img src={icon} alt={text} />
      <span>{text}</span>
    </div>
  );
};

export default Tech;
