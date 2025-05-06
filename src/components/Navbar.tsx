import MenuIcon from "@mui/icons-material/Menu";
import NavScrollLink from "./interface/NavScrollLink";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Navbar = () => {
  const navLinks = [
    "Home",
    "Skills",
    "Experience",
    "Clients",
    "Projects",
    "Contact",
  ];

  return (
    <nav>
      <p className="brand">DARMIT</p>
      <ul className="list-1">
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavScrollLink text={link} name={link.toLowerCase()} />
          </li>
        ))}
      </ul>
      <input id="nav-toggler" type="checkbox" />
      <label id="open-nav" htmlFor="nav-toggler">
        <MenuIcon fontSize="large" />
      </label>
      {/* <label id="close-nav" htmlFor="nav-toggler">
        <CloseIcon fontSize="large" />
      </label> */}
      <div id="mobile-nav" className="mobile-nav">
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <>
                <ArrowForwardIcon className="hover-indicator" sx={{ margin: 0 }} />
              </>
              <NavScrollLink text={link} name={link.toLowerCase()} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
