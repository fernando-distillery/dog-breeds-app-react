import React, { useEffect, useState } from "react";
import "../styles.css";

export const DogFooter = () => {
  const [year, setYear] = useState();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer>
      <span>Dogs App | Fernando Martinez &copy; {year}</span>
    </footer>
  );
};
