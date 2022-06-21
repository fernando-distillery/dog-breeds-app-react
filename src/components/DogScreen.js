import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBreedRandomImage } from "../helpers/helpers";
import "../styles.css";

export const DogScreen = () => {
  const [breedRandomImage, setBreedRandomImage] = useState("");
  const { breedName } = useParams();
  const navigate = useNavigate();

  const getBreedRandomImageUrl = async (breedName) => {
    const imageUrl = await getBreedRandomImage(breedName);
    setBreedRandomImage(imageUrl);
  };

  useEffect(() => {
    getBreedRandomImageUrl(breedName);
  }, [breedName]);

  return (
    <div className="dog-screen__container">
      <h1 className="breedname">
        {breedName.substring(0, 1).toUpperCase() + breedName.substring(1)}
      </h1>
      {breedRandomImage && breedName && (
        <img
          className="dog__img"
          src={breedRandomImage}
          alt={`A dog whose breed is ${breedName}`}
        />
      )}
      <div>
        <button
          className="action-button"
          onClick={() => {
            navigate(-1);
          }}
        >
          <i
            className="fa fa-arrow-left"
            aria-hidden="true"
            style={{ fontSize: "24px" }}
          ></i>
        </button>
        <button
          className="action-button"
          onClick={() => {
            getBreedRandomImageUrl(breedName);
          }}
        >
          <i
            className="fa-solid fa-arrow-rotate-right"
            aria-hidden="true"
            style={{ fontSize: "24px" }}
          ></i>
        </button>
      </div>
    </div>
  );
};
