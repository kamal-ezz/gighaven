import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import App from "./App";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className="mb-28 flex-grow">
        <App />
      </div>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
