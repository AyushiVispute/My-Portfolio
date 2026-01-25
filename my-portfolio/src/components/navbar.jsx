import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Ayushi Vispute</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/Projects">Projects</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
