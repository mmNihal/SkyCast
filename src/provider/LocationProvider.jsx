import { useState } from "react";
import { LocationContext } from "../context/index";

const LocationsProvider = ({ children }) => {
  const [selectLocation, setSelectLocation] = useState({
    location: "",
    latitude: 0,
    longitude: 0,
  });

  return (
    <LocationContext.Provider value={{ selectLocation, setSelectLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationsProvider;
