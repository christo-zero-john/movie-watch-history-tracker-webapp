import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-md navbar-dark p-0">
      <div class="container-fluid">
        <a class="navbar-brand fs-3 text-light fw-bolder en-iceberg" href="#">
          MWHT
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Watch History
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                data-bs-toggle="offcanvas"
                data-bs-target="#movieSearchFormOffcanvas"
                aria-controls="movieSearchFormOffcanvas"
              >
                Explore
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/wishlist">
                Wishlist
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/recommended">
                Recommended
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
