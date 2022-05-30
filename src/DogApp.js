import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { DogFooter } from "./components/DogFooter";
import { DogHeader } from "./components/DogHeader";
import { DogList } from "./components/DogList";
import { DogListItem } from "./components/DogListItem";

export const DogApp = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((resp) => resp.json())
      .then(({ message }) => setBreeds(Object.keys(message)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <div className="main-content">
        <DogHeader />
        <p className="select-breed"> Select your favourite breed! </p>
        {breeds && (
          <DogList defaultSelected={breeds[0]}>
            {breeds.map((breed) => (
              <DogListItem key={breed} value={breed}>
                {breed}
              </DogListItem>
            ))}
          </DogList>
        )}
      </div>
      <DogFooter />
    </main>
  );
};
