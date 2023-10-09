import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ to, children, ...props }: any) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <Link to={to} {...props} className={isActive ? "active" : ""}>
      {children}
    </Link>
  );
};

const NavBar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Hook Examples
      </Link>
      <ul>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/useRef">UseRef</CustomLink>
      </ul>
    </nav>
  );
};

export default NavBar;
