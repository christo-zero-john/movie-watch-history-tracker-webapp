import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "./components/routes/search";
import WatchHistory from "./components/routes/watch-history";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/watch-history" element={<WatchHistory />} />
      </Routes>
    </BrowserRouter>
  );
}
