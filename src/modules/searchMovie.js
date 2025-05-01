class searchMovie {
  constructor() {
    if (!searchMovie.instance) {
      searchMovie.instance = this;
    }
    return searchMovie.instance;
  }

  searchForMovie = async (event, stateUpdater) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const searchTerm = formData.get("search-term");
    console.log(searchTerm);

    const searchURL = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}`;

    const request = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        "Content-Type": "application/json",
      },
    };

    console.log(request.headers.Authorization.split(" "));
    console.log("Sending request to fetch movies related to: ", searchTerm);
    fetch(searchURL, request)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  };
}
export default new searchMovie();
