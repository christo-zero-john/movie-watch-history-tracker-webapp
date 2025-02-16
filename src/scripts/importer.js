import { DisplayManager } from "./DisplayManager.js";
import { Modal, Offcanvas } from "./WindowElements.js";

console.log("Importing DOM Handlers");
window.displayManager = new DisplayManager();
window.modal = new Modal();
window.offcanvas = new Offcanvas();
window.offcanvas.setTitle("Movie Search");
window.offcanvas.show();
