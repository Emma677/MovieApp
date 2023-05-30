import { createContext, useState } from "react";

const Places = createContext();

const PlaceContext = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState("");
  return (
    <Places.Provider value={(selectedCity, setSelectedCity)}>
      {children}
    </Places.Provider>
  );
};

export {PlaceContext,Places}
