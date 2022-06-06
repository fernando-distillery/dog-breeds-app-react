import React, { useEffect, useState } from "react";
import { DogFooter } from "./components/DogFooter";
import { DogHeader } from "./components/DogHeader";
import { DogList } from "./components/DogList";
import { DogListItem } from "./components/DogListItem";
import { getBreeds } from "./helpers/helpers";

export const DogApp = () => {
  const [breeds, setBreeds] = useState([]);

  const setBreedList = async () => {
    const breedList = await getBreeds();
    setBreeds(breedList);
  };

  useEffect(() => {
    setBreedList();
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
