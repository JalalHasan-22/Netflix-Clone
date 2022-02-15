import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Nav activeKey="/home">
      <Nav.Item>
        <Link to="/">Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/favlist">Favorites</Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;
