import placeHolderImage from "/src/assets/images/icons/image-placeholder.png";

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
      tmdbPath = placeHolderImage;
    } else {
      if (
        !tmdbPath.includes("http") &&
        !tmdbPath.includes("image-placeholder")
      ) {
        tmdbPath = `https://image.tmdb.org/t/p/w1280/${tmdbPath}`;
      }
    }
    return tmdbPath;
  }

  constructRuntime(minutes) {
    // Convert only if needed
    if (typeof minutes == "number") {
      let runtime = [Math.floor(minutes / 60), minutes % 60];
      return runtime;
    } else {
      return minutes;
    }
  }

  dateToInWords(releaseDate) {
    // Convert only if needed
    if (releaseDate.includes("-")) {
      const monthInWords = {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December",
      };

      releaseDate = releaseDate.split("-");
      releaseDate[1] = monthInWords[+releaseDate[1]];
      return releaseDate.reverse().join(" ");
    } else {
      return releaseDate;
    }
  }
}
export default new Helpers();
