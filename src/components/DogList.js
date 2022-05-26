import React, { createContext, useCallback, useMemo, useState } from "react";

export const DogContext = createContext();

export const DogList = ({ children, defaultSelected }) => {
  const [selectedItem, setSelectedItem] = useState(defaultSelected);

  const toggleSelectedItem = useCallback(
    (item) => {
      if (item === selectedItem) {
        return;
      }
      setSelectedItem(item);
    },
    [selectedItem, setSelectedItem]
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
