import React, { createContext, useState } from 'react';

export const carbonFootprintContext = createContext();

export const MainProvider = ({ children }) => {
  const [householdSize, setHouseholdSize] = useState('');
  const [homeSize, setHomeSize] = useState('');
  const [food, setFood] = useState('');
  const [water, setWater] = useState('');
  const [purchases, setPurchases] = useState('');
  const [waste, setWaste] = useState('');
  const [transportation, setTransportation] = useState('');
  const [publicTransit, setPublicTransit] = useState('');
  const [flights, setFlights] = useState('');
  const [totalFootprint, setTotalFootprint] = useState('');
  const [recycle, setRecycle] = useState({
    none: false,
    glass: false,
    plastic: false,
    paper: false,
    aluminum: false,
    steel: false,
    foodWaste: false
  });

  return (
    <carbonFootprintContext.Provider
      value={{
        householdSize, setHouseholdSize,
        homeSize, setHomeSize,
        food, setFood,
        water, setWater,
        purchases, setPurchases,
        waste, setWaste,
        transportation, setTransportation,
        publicTransit, setPublicTransit,
        flights, setFlights,
        totalFootprint, setTotalFootprint,
        recycle, setRecycle
      }}
    >
      {children}
    </carbonFootprintContext.Provider>
  )
};
