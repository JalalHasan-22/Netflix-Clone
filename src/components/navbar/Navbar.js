import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <Nav activeKey="/home">
      <h1>Netflix Clone</h1>
      <ul>
        <Nav.Item>
          <Link to="/">Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/favlist">Favorites</Link>
        </Nav.Item>
      </ul>
    </Nav>
  );
}

export default Navbar;
