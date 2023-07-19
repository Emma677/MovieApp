import { createContext, useState } from "react";

const Distination = createContext();

const DistinationContext = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState("");
  const [locationId, setLocationId] = useState("");
  return (
    <Distination.Provider value={{selectedCity, setSelectedCity,locationId, setLocationId}}>
      {children}
    </Distination.Provider>
  );
};

export {DistinationContext,Distination}