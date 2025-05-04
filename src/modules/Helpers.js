class Helpers {
  constructor() {
    if (!Helpers.instance) {
      Helpers.instance = this;
    }
    return Helpers.instance;
  }

  /**
   * Extracts formData from a form submit event.
   * @param {*} event An event object sent when a form submit event happens.
   * @param {*} elementNames all extra parameters are the names of the form elements to extract. Pass the element names in the order you want them to be extracted.
   */
  extractFormData(event, ...elementNames) {
    event.preventDefault();
    console.log("Extracting form data.");
    const form = event.target;
    const formData = new FormData(form);
    let extractedData = {};
    elementNames.forEach((name) => {
      extractedData[name] = formData.get(name);
    });

    console.log("Successfully extracted form data");
    return extractedData;
  }

  getRandomColor() {
    const colors = ["light", "warning", "primary", "danger", "success", "info"];

    return colors[Math.floor(Math.random() * 5)];
  }

  constructImagePath(tmdbPath) {
    if (!tmdbPath) {
      tmdbPath = "/src/assets/images/icons/image-placeholder.png";
    } else {
      if (
        !tmdbPath.includes("http") &&
        !tmdbPath.includes("image-placeholder")
      ) {
        tmdbPath = `https://image.tmdb.org/t/p/w500/${tmdbPath}`;
      }
    }
  }
}
export default new Helpers();
