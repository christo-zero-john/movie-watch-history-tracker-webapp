import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "./components/routes/search";
import WatchHistory from "./components/routes/watch-history";
import SearchMovie from "./components/routes/search";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchMovie />} />
        <Route path="/search" element={<SearchMovie />} />
        <Route path="/watch-history" element={<WatchHistory />} />
      </Routes>
    </BrowserRouter>
  );
}
