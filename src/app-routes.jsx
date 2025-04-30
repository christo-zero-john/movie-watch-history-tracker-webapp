import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "./components/dashboard/dashboard";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
