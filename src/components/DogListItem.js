import React from "react";
import { useDogContext } from "../hooks/useDogContext";

export const DogListItem = ({ children, value }) => {
  const { toggleSelectedItem, selectedItem } = useDogContext();

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        toggleSelectedItem(value);
      }}
      id={`${value}-menu-item`}
      className={`menu__item ${selectedItem === value && "active"}`}
    >
      {children}
    </button>
  );
};
