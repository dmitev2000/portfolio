const ProjectType = ({ image, text }: { image: string; text: string }) => {
  return (
    <div className="proj" style={{ backgroundImage: `url(${image})` }}>
      <span>{text}</span>
    </div>
  );
};

export default ProjectType;
