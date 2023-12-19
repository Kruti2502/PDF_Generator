import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const location = useLocation();

  return (
    <div className="nav_links">
      {location.pathname !== "/" && (
        <NavLink to="/" className="nav_link">
          Home
        </NavLink>
      )}
      {location.pathname !== "/listofpdfs" && (
        <NavLink to="/listofpdfs" className="nav_link">
          List Of All Pdfs
        </NavLink>
      )}
      {location.pathname !== "/createpdf" && (
        <NavLink to="/createpdf" className="nav_link">
          Create Pdf
        </NavLink>
      )}
    </div>
  );
}

export default Header;
