import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/main.scss";
import "bootstrap/dist/css/bootstrap.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={routes} />
    </React.StrictMode>
);
