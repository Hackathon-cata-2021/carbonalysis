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

  const [car, setCar] = useState('');
  const [fuel, setFuel] = useState({
    totalMiles: '',
    mpg: ''
  });
  const [utility, setUtility] = useState({
    kilowatt: '',
    naturalGas: '',
    propane: '',
    fuel: ''
  });
  const [offsets, setOffsets] = useState('');
  const [totalEmissions, setTotalEmissions] = useState('');

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
        recycle, setRecycle,
        car, setCar,
        fuel, setFuel,
        utility, setUtility,
        offsets, setOffsets,
        totalEmissions, setTotalEmissions
      }}
    >
      {children}
    </carbonFootprintContext.Provider>
  )
};
