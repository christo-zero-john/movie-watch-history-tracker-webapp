class searchMovie {
  constructor() {
    if (!searchMovie.instance) {
      searchMovie.instance = this;
    }
    return searchMovie.instance;
  }

  searchForMovie = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const searchTerm = formData.get("search-term");
    console.log(searchTerm);
    const request = {}
  };
}
export default new searchMovie();
