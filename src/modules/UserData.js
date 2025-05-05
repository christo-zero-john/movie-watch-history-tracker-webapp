class UserData {
  constructor() {
    if (!UserData.instance) {
      UserData.instance = this;
    }

    this.data = {
      watchTime: [0, 0],
      totalMovies: 0,
      currentStreak: 0,
      genres: [],
    };
this.watchHistory=
    return UserData.instance;
  }

  calculate: {
    watchTime: () => {},
    totalMovies: () => {},
    currentStreak: () => {},
    genres: () => {},
  };
}
export default new UserData();
