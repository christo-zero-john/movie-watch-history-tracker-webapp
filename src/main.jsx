import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/defaults.css";
import "./styles/index.css";
import AppRoutes from "./app-routes";
import UserData from "./modules/UserData";
import LocalDatabase from "./modules/LocalDatabase";

// Setup userData. LocalDatabase is also initialized inside this method.
LocalDatabase.initializeDatabase();

// Set the bg color and text color of the entire document so that it matches the dark theme
document.body.style.backgroundColor = "#212529";
document.body.style.color = "#f8f9fa";

createRoot(document.getElementById("root")).render(<AppRoutes />);
