import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import NavScrollLink from "./interface/NavScrollLink";

const Navbar = () => {
  return (
    <nav>
      <p className="brand">DARMIT</p>
      <ul className="list-1">
        <li>
          <NavScrollLink text="Home" name="home" />
        </li>
        <li>
          <NavScrollLink text="Skills" name="skills" />
        </li>
        <li>
          <NavScrollLink text="Experience" name="experience" />
        </li>
        <li>
          <NavScrollLink text="Clients" name="clients" />
        </li>
        <li>
          <NavScrollLink text="Projects" name="projects" />
        </li>
        <li>
          <NavScrollLink text="Contact" name="contact" />
        </li>
      </ul>
      <input id="nav-toggler" type="checkbox" />
      <label id="open-nav" htmlFor="nav-toggler">
        <MenuIcon fontSize="large" />
      </label>
      <label id="close-nav" htmlFor="nav-toggler">
        <CloseIcon fontSize="large" />
      </label>
      <div className="mobile-nav">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/skills">Skills</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
