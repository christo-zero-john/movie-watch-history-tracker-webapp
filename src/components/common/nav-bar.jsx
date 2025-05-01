import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
  return (
    <Navbar expand="md" className="px-2 shadow">
      <Navbar.Brand href="/">MWHT</Navbar.Brand>
      <Navbar.Toggle aria-controls="nav-bar" />
      <Navbar.Collapse id="nav-bar">
        <Nav className="ms-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/watch-history">Watch List</Nav.Link>
          <Nav.Link href="/wish-list">Wish List</Nav.Link>
          <Nav.Link href="/search">Search for Movies</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
