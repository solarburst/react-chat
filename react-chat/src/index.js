import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChatPage } from "./pages";
import { Title } from "./components";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Title />

      <Routes>
        <Route
          path="/"
          element={<h1>Home Page</h1>}
        />
        <Route path="/chat/*" element={<ChatPage />} />
        <Route
          path="/*"
          element={<h1>404</h1>}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
