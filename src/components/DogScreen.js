import React from "react";
import { useParams } from "react-router-dom";

export const DogScreen = () => {
  const { breedName } = useParams();

  return (
    <div>
      <h1>{breedName}</h1>
    </div>
  );
};
