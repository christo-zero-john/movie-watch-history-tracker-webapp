import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/defaults.css";
import "./styles/index.css";
import AppRoutes from "./app-routes";
import LocalDatabase from "./modules/LocalDatabase";

LocalDatabase.initialzeDatabase();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>
);
