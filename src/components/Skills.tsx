import {
  BackendTechnologies,
  CloudTechnologies,
  DatabaseTechnologies,
  FrontendTechnologies,
} from "../utils/tech-lists/tech-lists";
import Badge from "@mui/material/Badge";
import StorageIcon from "@mui/icons-material/Storage";
import LanguageIcon from "@mui/icons-material/Language";
import CloudIcon from "@mui/icons-material/Cloud";
import DnsIcon from "@mui/icons-material/Dns";
import TechList from "./interface/TechList";
import { Element } from "react-scroll";

const Skills = () => {
  return (
    <Element className="custom-card item-wrapper" name="skills">
      <h1 className="title">Skills</h1>
      <p className="sub-title">I can say i'm quite good at</p>
      <h3>
        Frontend techonlogies
        <Badge
          showZero
          color="primary"
          badgeContent={FrontendTechnologies.length}
        >
          <LanguageIcon />
        </Badge>
      </h3>
      <TechList items={FrontendTechnologies} hasLine={false} />
      <h3>
        Backend techonlogies
        <Badge
          showZero
          color="primary"
          badgeContent={BackendTechnologies.length}
        >
          <DnsIcon />
        </Badge>
      </h3>
      <TechList items={BackendTechnologies} hasLine={false} />
      <h3>
        Database techonlogies
        <Badge
          showZero
          color="primary"
          badgeContent={DatabaseTechnologies.length}
        >
          <StorageIcon />
        </Badge>
      </h3>
      <TechList items={DatabaseTechnologies} hasLine={false} />
      <h3>
        Cloud techonlogies
        <Badge showZero color="primary" badgeContent={CloudTechnologies.length}>
          <CloudIcon />
        </Badge>
      </h3>
      <TechList items={CloudTechnologies} hasLine={false} />
    </Element>
  );
};

export default Skills;
