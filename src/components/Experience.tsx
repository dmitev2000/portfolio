import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import SchoolIcon from "@mui/icons-material/School";
import BuildIcon from "@mui/icons-material/Build";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Experience = () => {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        date={formattedDate}
        icon={<CalendarMonthIcon />}
      >
        <h3>Current date</h3>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Aug 2024"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Bachelor of Computer Science and Engineering
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Education - Graduation
        </h4>
        <p>
          I completed my undergraduate studies in Internet, networks and
          security.
        </p>
        <p>
          I have successfully defended my thesis titled "Software Solution for
          Online Stickers Sale" at the Faculty of Computer Science and
          Engineering. This project involved the development of a comprehensive
          e-commerce platform tailored specifically for the sale of stickers
          online, incorporating features such as user-friendly design, stickers
          uploads, and creation, and efficient order management. The defense
          highlighted the technical innovations, practical applications, and
          potential market impact of the solution, marking a significant
          milestone in my academic and professional journey.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="Jul 01 2024 - PRESENT"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Software Developer - Entry level
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          MCA, Skopje, Macedonia
        </h4>
        <p>
          Developed and maintained dynamic web applications, utilizing C# and
          .NET Core for back-end operations, HTML/CSS/TypeScript/Angular for
          front-end interfaces, and SQL Server for robust database management.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Apr 01 2024 - Jun 30 2024"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Software Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">
          MCA, Skopje, Macedonia
        </h4>
        <p>Software Developers</p>
        <p>
          Angular / .NET Core / Microsoft SQL Server / Git / TFS - Azure DevOps
          Server
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Dec 11 2023 - Mar 29 2024"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<ImportantDevicesIcon />}
      >
        <h3 className="vertical-timeline-element-title">Internship</h3>
        <h4 className="vertical-timeline-element-subtitle">
          MCA, Skopje, Macedonia
        </h4>
        <p>Internship for Software Developers.</p>
        <p>
          Angular / .NET Core / Microsoft SQL Server / Git / TFS - Azure DevOps
          Server
        </p>
        <p>
          I worked with a team implementing new features and tasks that were
          part of a large production system. In the course of daily work, I was
          challenged to produce the best solution possible, with stringent code
          reviews from the team and static analyzer bots. Compulsory daily peer
          reviews, fully tested code, and continuous delivery were key elements
          that improved my codes' quality. To master new technologies, we had
          weekly workshop sessions where the teams rapidly gained knowledge and
          experience.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Dec 12 2022 - Dec 16 2022"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<BuildIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Design and Interactive Graphics in IT
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Workshop - Axeltra, Skopje
        </h4>
        <p>
          • Participated in the DIGIT React Workshop, a competitive event
          designed to foster innovation and expertise in React application
          development.
          <br />
          • Collaborated with two talented colleagues to conceptualize, design,
          and develop a React application tailored for food chain restaurants
          and shops.
          <br />
          • Demonstrated exceptional teamwork, problem-solving, and technical
          skills throughout the workshop.
          <br />
          • Successfully secured second place in the competition, showcasing our
          ability to deliver a functional and userfriendly React application for
          the food service industry.
          <br />• This experience highlighted my proficiency in React
          development and my ability to work effectively in a team, bringing
          innovative solutions to real-world challenges.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Sep 2019"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Faculty of Computer Science and Engineering
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Education - FCSE, Skopje
        </h4>
        <p>Started undergraduate studies - Internet, networks and security.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<AccessTimeIcon />}
      />
    </VerticalTimeline>
  );
};

export default Experience;
