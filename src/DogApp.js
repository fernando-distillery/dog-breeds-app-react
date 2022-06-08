import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { DogFooter } from "./components/DogFooter";
import { getBreeds } from "./helpers/helpers";

export const DogApp = () => {
  const navigate = useNavigate();

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
    <main>
      <Outlet context={[breeds]} />
      <DogFooter year />
    </main>
  );
};
