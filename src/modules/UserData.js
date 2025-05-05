class UserData {
  constructor() {
    if (!UserData.instance) {
      UserData.instance = this;
    }
    return UserData.instance;
  }
}
export default new UserData();
