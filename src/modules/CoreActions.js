class CoreActions {
  constructor() {
    if (!CoreActions.instance) {
      CoreActions.instance = this;
    }
    return CoreActions.instance;
  }

  
}
export default new CoreActions();
