import ProjectType from "./interface/ProjectType";
import soloProj from "../assets/proj/proj-solo.svg";
import teamProj from "../assets/proj/proj-team.svg";
import otherProj from "../assets/proj/proj-other.svg";

const Projects = () => {
  return (
    <div className="projects">
      <ProjectType image={soloProj} text="Individual" />
      <ProjectType image={teamProj} text="Team" />
      <ProjectType image={otherProj} text="Other" />
    </div>
  );
};

export default Projects;
