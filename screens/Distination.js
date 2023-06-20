import { createContext, useState } from "react";

const Distination = createContext();

const DistinationContext = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState("");
  return (
    <Distination.Provider value={{selectedCity, setSelectedCity}}>
      {children}
    </Distination.Provider>
  );
};

export {DistinationContext,Distination}