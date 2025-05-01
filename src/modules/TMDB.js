import Helpers from "./helpers";

class TMDB {
  constructor() {
    if (!TMDB.instance) {
      TMDB.instance = this;
    }
    return TMDB.instance;
  }

  searchMovie = async (searchTerm, page, stateUpdater) => {
    console.log(searchTerm);

    const searchURL = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&page=${page}`;

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
        if (data.page == 1) {
          stateUpdater({
            ...data,
            search_term: searchTerm,
          });
        } else {
          stateUpdater((prevState) => ({
            ...data,
            results: [...prevState.results, ...data.results],
            total_pages: data.total_pages,
            search_term: searchTerm,
            page: page,
          }));
        }
      })
      .catch((error) => console.log(error));
  };
}
export default new TMDB();
