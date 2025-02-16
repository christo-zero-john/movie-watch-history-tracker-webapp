export class Modal {}

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
    document.getElementById("offcanvas-title").innerText = title;
  }

  setContent(content) {
    document.getElementById("offcanvas-body").innerText = content;
  }
}
