import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar({ active = null }) {
  return (
    <nav class="navbar navbar-expand-md navbar-dark p-0">
      <div class="container-fluid">
        <a class="navbar-brand fs-3 text-light fw-bolder en-iceberg" href="/">
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
              <a
                class={`nav-link ${active == "dashboard" && "active"}`}
                aria-current="page"
                href="/"
              >
                Dashboard
              </a>
            </li>{" "}
            <li class="nav-item">
              <a
                class={`nav-link ${active == "watch-history" && "active"}`}
                aria-current="page"
                href="/movie-list/watch-history"
              >
                Watch History
              </a>
            </li>
            <li class="nav-item">
              <a
                class={`nav-link ${active == "wish-list" && "active"}`}
                href="/movie-list/wish-list"
              >
                Wishlist
              </a>
            </li>
            <li class="nav-item">
              <a
                class={`nav-link ${active == "explore" && "active"}`}
                aria-current="page"
                href="/search"
              >
                Explore
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
