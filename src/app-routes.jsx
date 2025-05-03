import { BrowserRouter, Route, Routes } from "react-router";
import SearchMovie from "./components/routes/search";
import WatchHistory__WishList from "./components/routes/saved-movie-list";
import Dashboard from "./components/routes/dashboard";
import MovieDetails from "./components/routes/movie-details";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/search" element={<MovieDetails />} />
        <Route path="/details/:id" element={<SearchMovie />} />
        <Route
          path="/movie-list/:context"
          element={<WatchHistory__WishList />}
        />
      </Routes>
    </BrowserRouter>
  );
}
