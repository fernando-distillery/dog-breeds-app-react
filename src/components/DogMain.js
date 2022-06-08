import React from "react";
import { useOutletContext } from "react-router-dom";
import { DogHeader } from "./DogHeader";
import { DogList } from "./DogList";
import { DogListItem } from "./DogListItem";

export const DogMain = () => {
  const [breeds] = useOutletContext();

  return (
    <div className="main-content">
      <DogHeader />
      <p className="select-breed">
        {" "}
        Select your favourite breed and see a random image of that kind of dog!{" "}
      </p>
      {breeds && (
        <DogList>
          {breeds.map((breed) => (
            <DogListItem key={breed} value={breed}>
              {breed}
            </DogListItem>
          ))}
        </DogList>
      )}
    </div>
  );
};
