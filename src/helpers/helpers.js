export const getBreedRandomImage = async (breedName) => {
  try {
    const response = await fetch(
      `https://dog.ceo/api/breed/${breedName}/images/random`
    );
    const { message } = await response.json();
    return message;
  } catch (error) {
    console.error(error);
  }
};

export const getBreeds = async () => {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const { message } = await response.json();
    console.log(Object.keys(message));
    return Object.keys(message);
  } catch (error) {
    console.error(error);
  }
};
