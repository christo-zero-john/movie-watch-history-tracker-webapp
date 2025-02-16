import { DisplayManager } from "./DisplayManager.js";
import { Modal, Offcanvas } from "./WindowElements.js";
import { SearchMovie } from "./SearchMovie.js";

console.log("Importing DOM Handlers");
window.displayManager = new DisplayManager();
window.modal = new Modal();
window.offcanvas = new Offcanvas();
window.searchMovie = new SearchMovie();
