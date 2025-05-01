class LocalDatabase {
  constructor() {
    if (!LocalDatabase.instance) {
      LocalDatabase.instance = this;
    }
    return LocalDatabase.instance;
  }

  initialzeDatabase() {
    console.log("Initializing local database");
    if (!localStorage.getItem("watch-history")) {
      localStorage.setItem("watch-history", JSON.stringify([]));
    }
    if (!localStorage.getItem("wish-list")) {
      localStorage.setItem("wish-list", JSON.stringify([]));
    }
    console.log("Local database initialized successfully.");
  }
}
export default new LocalDatabase();
