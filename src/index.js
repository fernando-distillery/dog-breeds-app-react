import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { DogApp } from "./DogApp";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DogScreen } from "./components/DogScreen";
import { DogMain } from "./components/DogMain";
import { ThemeProvider } from "./contexts/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DogApp />}>
          <Route path="main" element={<DogMain />} />
          <Route path="breeds" element={<DogScreen />}>
            <Route path=":breedName" element={<DogScreen />} />
          </Route>
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
  </ThemeProvider>
);
