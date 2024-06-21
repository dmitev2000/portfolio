import {
  BackendTechnologies,
  CloudTechnologies,
  DatabaseTechnologies,
  FrontendTechnologies,
} from "../utils/tech-lists/tech-lists";
import Slider from "./interface/data-display/Slider";
import Badge from "@mui/material/Badge";
import StorageIcon from "@mui/icons-material/Storage";
import LanguageIcon from "@mui/icons-material/Language";
import CloudIcon from "@mui/icons-material/Cloud";
import DnsIcon from "@mui/icons-material/Dns";

const Skills = () => {
  return (
    <div className="default-page">
      <div className="custom-card">
        <h1>Skills - Tech stack</h1>
        <h3>
          Frontend techonlogies
          <Badge color="primary" badgeContent={FrontendTechnologies.length}>
            <LanguageIcon />
          </Badge>
        </h3>
        <Slider sliderItems={FrontendTechnologies} />
        <h3>
          Backend techonlogies
          <Badge color="primary" badgeContent={BackendTechnologies.length}>
            <DnsIcon />
          </Badge>
        </h3>
        <Slider sliderItems={BackendTechnologies} />
        <h3>
          Database techonlogies
          <Badge color="primary" badgeContent={DatabaseTechnologies.length}>
            <StorageIcon />
          </Badge>
        </h3>
        <Slider sliderItems={DatabaseTechnologies} />
        <h3>
          Cloud techonlogies
          <Badge color="primary" badgeContent={CloudTechnologies.length}>
            <CloudIcon />
          </Badge>
        </h3>
        <Slider sliderItems={CloudTechnologies} />
      </div>
    </div>
  );
};

export default Skills;
