class Helpers {
  constructor() {
    if (!Helpers.instance) {
      Helpers.instance = this;
    }
    return Helpers.instance;
  }
}
export default new Helpers();
