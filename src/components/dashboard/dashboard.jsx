import { useState } from "react";
import searchMovie from "../../modules/searchMovie";

export default function Dashboard() {
  const [searchResults, setSearchResults] = useState(null);

  return (
    <div>
      <form onSubmit={(event) => searchMovie.searchForMovie(event)}>
        <input
          name="search-term"
          type="text"
          required
          placeholder="Search for movies"
        />
        <button>Search</button>
      </form>
    </div>
  );
}
