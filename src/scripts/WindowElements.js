export class Modal {
  constructor() {
    let ModalDiv = document.createElement("div");
    ModalDiv.classList.add("modal", "fade");
    ModalDiv.id = "modal";
    ModalDiv.setAttribute("data-bs-backdrop", "static");
    ModalDiv.setAttribute("tabindex", "-1");
    ModalDiv.setAttribute("aria-labelledby", "modal-title");
    ModalDiv.setAttribute("aria-hidden", "true");

    ModalDiv.innerHTML = `
       <div class="modal-dialog modal-dialog-centered col-md-8 mx-auto">
          <div class="modal-content bg-transparent">
            <div class="modal-body p-0 m-0" id="modal-body"></div>
          </div>
        </div>
      `;

    document.body.appendChild(ModalDiv);
    this.modal = new bootstrap.Modal(ModalDiv);
  }

  show() {
    this.modal.show();
  }

  setTitle() {
    console.log("No header for this modal");
  }

  setContent(content) {
    console.log(document.getElementById("modal-body"));
    document.getElementById("modal-body").innerHTML = content;
  }

  reset() {
    console.log("Resetting Offcanavs");
    this.setContent("DATA LOADING...");
  }

  hide() {
    console.log("Hiding Offcanavs");
    this.reset();
    this.modal.hide();
  }
}

export class Offcanvas {
  constructor() {
    let offCanvasDiv = document.createElement("div");
    offCanvasDiv.classList.add("offcanvas", "bg-dark", "text-light");
    offCanvasDiv.id = "offcanvas";
    offCanvasDiv.setAttribute("data-bs-backdrop", "static");

    offCanvasDiv.setAttribute("tabindex", "-1");
    offCanvasDiv.setAttribute("aria-labelledby", "offcanvas-title");

    offCanvasDiv.innerHTML = `
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvas-title">
        TITLE LOADING...
        </h5>
        <button
        type="button"
        class="btn-close btn-close-white"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
        ></button>
    </div>

    <div class="offcanvas-body no-scrollbar" id="offcanvas-body">DATA LOADING...</div>
    `;

    document.body.appendChild(offCanvasDiv);
    this.offcanvas = new bootstrap.Offcanvas(offCanvasDiv);
  }

  show() {
    this.offcanvas.show();
  }

  setTitle(title) {
    document.getElementById("offcanvas-title").innerHTML = title;
  }

  setContent(content) {
    document.getElementById("offcanvas-body").innerHTML = content;
  }

  reset() {
    console.log("Resetting Offcanavs");
    this.setTitle("TITLE LOADING...");
    this.setContent("DATA LOADING...");
  }

  hide() {
    console.log("Hiding Offcanavs");
    this.reset();
    this.offcanvas.hide();
  }
}

export function startBgSlideShow() {
  const bgImages = [
    "/src/assets/images/bg-slideshow/img 0.jpg",
    "/src/assets/images/bg-slideshow/img 1.jpg",
    "/src/assets/images/bg-slideshow/img 2.jpg",
    "/src/assets/images/bg-slideshow/img 3.jpg",
    "/src/assets/images/bg-slideshow/img 4.jpg",
    "/src/assets/images/bg-slideshow/img 5.jpg",
    "/src/assets/images/bg-slideshow/img 6.jpg",
    "/src/assets/images/bg-slideshow/img 7.jpg",
    "/src/assets/images/bg-slideshow/img 8.jpg",
    "/src/assets/images/bg-slideshow/img 9.jpg",
  ];

  const slideShowElements = document.querySelectorAll(".bg-slideshow-img");

  // console.log(slideShowElements);

  setInterval(() => {
    const index = Math.floor(Math.random() * 10);
    slideShowElements.forEach((element) => {
      element.src = bgImages[index];
    });
  }, 6000);
}
