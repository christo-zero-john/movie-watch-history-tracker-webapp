import { Navbar, Container, Nav } from "react-bootstrap";

export default function NavBar({ active = null }) {
  return (
    <Navbar expand="md" className="navbar-dark p-0">
      <Container fluid>
        <Navbar.Brand href="/" className="fs-3 text-light fw-bolder en-iceberg">
          Movie Folio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link href="/" active={active === "dashboard"}>
              Dashboard
            </Nav.Link>
            <Nav.Link
              href="/movie-list/watch-history"
              active={active === "watch-history"}
            >
              Watch History
            </Nav.Link>
            <Nav.Link
              href="/movie-list/wish-list"
              active={active === "wish-list"}
            >
              Wishlist
            </Nav.Link>
            <Nav.Link href="/search" active={active === "explore"}>
              Explore
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
