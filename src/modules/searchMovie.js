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

    const searchURL = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}`;
    const request = {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    };
  };
}
export default new searchMovie();
