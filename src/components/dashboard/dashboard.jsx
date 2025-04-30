import searchMovie from "../../modules/searchMovie";

export default function Dashboard() {
  return (
    <div>
      <form onSubmit={searchMovie.searchForMovie}>
        <input name="search-term" type="text" required placeholder="Search for movies" />
        <button>Search</button>
      </form>
    </div>
  );
}
