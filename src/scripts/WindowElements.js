export class Modal {}

export class Offcanvas {
  constructor() {
    let offcanVasDiv = document.createElement("div");
    offcanVasDiv.classList.add("offcanvas", "bg-dark", "text-light");
    offcanVasDiv.id = "offcanvas";
    offcanVasDiv.setAttribute("data-bs-backdrop", "static");

    offcanVasDiv.setAttribute("tabindex", "-1");
    offcanVasDiv.setAttribute(
      "aria-labelledby",
      "movieSearchFormOffcanvasLabel"
    );

    offcanVasDiv.innerHTML = `
        
    `
  }
}
