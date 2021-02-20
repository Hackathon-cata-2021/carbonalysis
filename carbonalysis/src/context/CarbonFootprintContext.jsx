import React, { createContext, useState } from 'react';

export const carbonFootprintContext = createContext();

export const MainProvider = ({ children }) => {
  const [householdSize, setHouseholdSize] = useState('');
  const [homeSize, setHomeSize] = useState('');
  const [food, setFood] = useState('');
  const [water, setWater] = useState('');
  const [purchases, setPurchases] = useState('');
  const [waste, setWaste] = useState('');
  const [recycle, setRecycle] = useState('');
  const [transportation, setTransportation] = useState('');
  const [publicTransit, setPublicTransit] = useState('');
  const [flights, setFlights] = useState('');
  const [totalFootprint, setTotalFootprint] = useState('');

  return (
    <carbonFootprintContext.Provider
      value={{
        householdSize, setHouseholdSize,
        homeSize, setHomeSize,
        food, setFood,
        water, setWater,
        purchases, setPurchases,
        waste, setWaste,
        recycle, setRecycle,
        transportation, setTransportation,
        publicTransit, setPublicTransit,
        flights, setFlights,
        totalFootprint, setTotalFootprint
      }}
    >
      {children}
    </carbonFootprintContext.Provider>
  )
}