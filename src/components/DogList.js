import React, { createContext, useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export const DogContext = createContext();

export const DogList = ({ children, defaultSelected }) => {
  const navigate = useNavigate();

  const [selectedItem, setSelectedItem] = useState(defaultSelected);

  const toggleSelectedItem = useCallback(
    (item) => {
      if (item === selectedItem) {
        return;
      }
      setSelectedItem(item);
      navigate(`/breeds/${item}`);
    },
    [selectedItem, setSelectedItem, navigate]
  );

  const value = useMemo(
    () => ({
      toggleSelectedItem,
      selectedItem,
    }),
    [toggleSelectedItem, selectedItem]
  );

  return (
    <DogContext.Provider value={value}>
      <menu className="menu">{children}</menu>
    </DogContext.Provider>
  );
};
