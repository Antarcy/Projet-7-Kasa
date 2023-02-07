import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav-header">
      <NavLink to="/" className="nav-header_link-home">
        Accueil
      </NavLink>
      <NavLink to="/about" className="nav-header_link-about">
        A Propos
      </NavLink>
    </nav>
  );
}
