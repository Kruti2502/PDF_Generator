import { NavLink } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="header">PDF Generator</div>
      <div className="menu">
        <NavLink to={"/listofpdfs"} className="link_nav list">
          List of all PDFs
        </NavLink>
        <NavLink to={"/createpdf"} className="link_nav create">
          Create PDF with preview
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
