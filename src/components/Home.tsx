import { SocialNetworkIcon } from "../models/Calsses";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import devImage from "../assets/dev.png";
import { TypeAnimation } from "react-type-animation";
import SocialIcon from "./interface/icons/SocialIcon";
import { Element, Link } from "react-scroll";

const Home = () => {
  const sequenceText = [
    "I am into Web Development!",
    "I am into Frontend Development!",
    "I am into Backend Development!",
    "I am into Mobile Development!",
    "I am into DevOps!",
  ];

  const socialNetworks: SocialNetworkIcon[] = [
    new SocialNetworkIcon(<GitHubIcon fontSize="medium" />, "", "Github"),
    new SocialNetworkIcon(<LinkedInIcon fontSize="medium" />, "", "LinkedIn"),
    new SocialNetworkIcon(<FacebookIcon fontSize="medium" />, "", "Facebook"),
    new SocialNetworkIcon(<InstagramIcon fontSize="medium" />, "", "Instagram"),
    new SocialNetworkIcon(<TwitterIcon fontSize="medium" />, "", "Twitter"),
  ];

  return (
    <Element className="home" name="home">
      <div className="intro">
        <h1 className="custom-bold">
          Dario <span>Mitev</span>
        </h1>
        <h2 style={{ fontSize: "2em" }}>B.Sc. in internet, networks and security</h2>
        <TypeAnimation
          sequence={sequenceText.map((x) => [x, 1000]).flat()}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
        <Link
          className="button-link"
          to="contact"
          smooth={true}
          delay={0}
          duration={100}
          offset={-60}
        >
          Contact
          <lord-icon
            src="https://cdn.lordicon.com/wzrwaorf.json"
            trigger="loop"
            delay="1000"
            stroke="bold"
            state="in-reveal"
            colors="primary:#d3d9d4,secondary:#5f9ef7"
            style={{ width: "35px", height: "35px" }}
          ></lord-icon>
        </Link>
        <div className="icons-list">
          {socialNetworks.map((item, index) => {
            return (
              <SocialIcon
                icon={item.icon}
                link={item.link}
                tooltipText={item.tooltip}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <div className="dev-image-wrapper">
        <img className="dev-image" src={devImage} alt="Developer" />
      </div>
    </Element>
  );
};

export default Home;
