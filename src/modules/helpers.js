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
  extractFormData(event, [...elementNames]) {
    
  }
}
export default new Helpers();
