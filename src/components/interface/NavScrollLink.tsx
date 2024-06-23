import { Link } from "react-scroll";

const NavScrollLink = ({ text, name }: { text: string; name: string }) => {
  return (
    <Link
      activeClass="nav-link-active"
      className="nav-link"
      smooth={true}
      spy
      offset={-60}
      delay={0}
      duration={100}
      to={name}
    >
      {text}
    </Link>
  );
};

export default NavScrollLink;
