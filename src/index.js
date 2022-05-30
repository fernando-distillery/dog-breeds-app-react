import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { DogApp } from "./DogApp";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DogScreen } from "./components/DogScreen";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<DogApp />}></Route>
      <Route path="breeds" element={<DogScreen />}>
        <Route path=":breedName" element={<DogScreen />} />
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
);
