import React, { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { DogFooter } from "./components/DogFooter";
import { ThemeContext } from "./contexts/ThemeContext";
import { getBreeds } from "./helpers/helpers";

export const DogApp = () => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const [breeds, setBreeds] = useState([]);
  const [year, setYear] = useState();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  useEffect(() => {
    const setBreedList = async () => {
      const breedList = await getBreeds();
      setBreeds(breedList);
    };
    setBreedList();
    navigate("/main");
  }, []);

  return (
    <main className={`${darkMode && "dark"}`}>
      <button
        onClick={toggleDarkMode}
        style={{
          position: "relative",
          top: "24px",
          left: "88%",
          width: "3em",
          height: "3em",
          border: "none",
          backgroundColor: "gray",
        }}
      >
        <i className="fas fa-moon"></i>
      </button>
      <Outlet context={[breeds]} />
      <DogFooter year={year} />
    </main>
  );
};
