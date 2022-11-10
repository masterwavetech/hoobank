import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./components/themeContext";
// import Navbar from "./components/navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <body className="bg-primary dark:bg-white transition-all">
        <App />
      </body>
    </ThemeProvider>
  </React.StrictMode>
);
