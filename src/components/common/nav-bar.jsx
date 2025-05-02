import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
  return (
    <Navbar expand="md" className="px-2 shadow border-bottom border-3 border-warning">
      <Navbar.Brand href="/">MWHT</Navbar.Brand>
      <Navbar.Toggle aria-controls="nav-bar" />
      <Navbar.Collapse id="nav-bar" className="alert alert-light rounded-0 border-0 shadow p-0 m-0 ps-2">
        <Nav className="ms-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/movie-list/watch-history">Watch List</Nav.Link>
          <Nav.Link href="/movie-list/wish-list">Wish List</Nav.Link>
          <Nav.Link href="/search">Search for Movies</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
