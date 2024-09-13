import { Element } from "react-scroll";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timelineDateFormatting } from "../utils/shared/timeline-options";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import { ProjectsList } from "../utils/proj-lists/proj-lists";
import { Button } from "@mui/material";
import ProjectTag from "./interface/ProjectTag";

const Projects = () => {
  const openDemo = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <Element className="item-wrapper" name="projects">
      <h1 className="title">Projects & Developments</h1>
      <p className="sub-title">
        Showcase of my latest works, projects and developments
      </p>
      <div className="projects">
        <VerticalTimeline>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            date={timelineDateFormatting(new Date())}
            icon={<CalendarMonthIcon />}
          >
            <h3>Current date</h3>
          </VerticalTimelineElement>
          {ProjectsList.map((proj, index) => {
            return (
              <VerticalTimelineElement
                key={proj.name.concat("-", index.toString())}
                className="vertical-timeline-element--education"
                date={timelineDateFormatting(proj.date)}
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                icon={<CalendarMonthIcon />}
              >
                <h3 className="vertical-timeline-element-title">{proj.name}</h3>
                <div className="tags-array">
                  {proj.tags.map((x, i) => (
                    <ProjectTag tag={x} key={i} />
                  ))}
                </div>
                <img
                  className="proj-image"
                  src={proj.coverImage}
                  alt={proj.name}
                />
                {proj.description && <p>{proj.description}</p>}
                <Button
                  variant="contained"
                  startIcon={<AdsClickIcon />}
                  onClick={() => openDemo(proj.demoLink)}
                >
                  Demo
                </Button>
              </VerticalTimelineElement>
            );
          })}
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<AccessTimeIcon />}
          />
        </VerticalTimeline>
      </div>
    </Element>
  );
};

export default Projects;
