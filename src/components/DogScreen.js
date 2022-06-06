import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBreedRandomImage } from "../helpers/helpers";

export const DogScreen = () => {
  const [breedRandomImage, setBreedRandomImage] = useState("");
  const { breedName } = useParams();

  const getBreedRandomImageUrl = async (breedName) => {
    const imageUrl = await getBreedRandomImage(breedName);
    setBreedRandomImage(imageUrl);
  };

  useEffect(() => {
    getBreedRandomImageUrl(breedName);
  }, [breedName]);

  return (
    <div>
      <h1>{breedName}</h1>
      {breedRandomImage && breedName && (
        <img src={breedRandomImage} alt={`A dog whose breed is ${breedName}`} />
      )}
    </div>
  );
};
