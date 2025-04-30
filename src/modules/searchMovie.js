class searchMovie {
  constructor() {
    if (!searchMovie.instance) {
      searchMovie.instance = this;
    }
    return searchMovie.instance;
  }

  

}
export default new searchMovie();
