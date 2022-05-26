import { useContext } from "react";
import { DogContext } from "../components/DogList";

export const useDogContext = () => {
  const context = useContext(DogContext);
  if (!context) {
    throw new Error(
      "DogListItem component cannot be used outside the DogList component."
    );
  }
  return context;
};
