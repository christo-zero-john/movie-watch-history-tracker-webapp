import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "./components/routes/dashboard";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
