/**
 * Module used to manage app icons
 */
class Icons {
  constructor() {
    if (!Icons.instance) {
      Icons.instance = this;
    }

    return Icons.instance;
  }
}
export default new Icons();
