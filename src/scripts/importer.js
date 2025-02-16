import { DisplayManager } from "./DisplayManager.js";
import { Modal, Offcanvas } from "./WindowElements.js";

console.log("Importing DOM Handlers");
window.displayManager = new DisplayManager();
window.modal = new Modal();
window.offcanvas = new Offcanvas();
window.offcanvas.show();
window.offcanvas.setTitle("Movie Search Form");
window.offcanvas.setContent(
  `
        <form action="" class="">
                <input
                  type="text"
                  class="col-9 col-md-10 bg-transparent border-0 border-bottom border-3 placeholder-light text-light fs-5 fw-100"
                  placeholder="SEARCH FOR ANYTHING"
                />
                <button
                  class="btn search-form-btn fs-5 fw-600 px-3 py-1 ms-2"
                  type="submit"
                >
                  GO
                </button>
              </form>
    `
);
