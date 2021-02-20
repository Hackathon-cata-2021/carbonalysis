import React, { useState, useContext, useEffect } from 'react';
import { carbonFootprintContext } from '../../context/CarbonFootprintContext';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

export default function RadioButtonsGroup({ carbonFootprintQuestions }) {
  // const [value, setValue] = useState('');

  const name = carbonFootprintQuestions.name;

  const {
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
  } = useContext(carbonFootprintContext);

  const handleChange = (event) => {
    switch (event.target.name) {
      case 'householdSize':
        setHouseholdSize(event.target.value);
        break;
      case 'homeSize':
        setHomeSize(event.target.value);
        break;
      case 'food':
        setFood(event.target.value);
        break;
      case 'water':
        setWater(event.target.value);
        break;
      case 'purchases':
        setPurchases(event.target.value);
        break;
      case 'waste':
        setWaste(event.target.value);
        break;
      case 'recycle':
        setRecycle(event.target.value);
        break;
      case 'transportation':
        setTransportation(event.target.value);
        break;
      case 'publicTransit':
        setPublicTransit(event.target.value);
        break;
      case 'flights':
        setFlights(event.target.value);
        break;
      default:
        break;
    }
  };

  return (
    // <carbonFootprintContext.Consumer>
      <FormControl component="fieldset">
        <RadioGroup name={name} onChange={handleChange}>
          {carbonFootprintQuestions.options.map(option => (
            <FormControlLabel
              checked={
                option === householdSize ? true : 
                option === homeSize ? true :
                option === food ? true :
                option === water ? true :
                option === purchases ? true :
                option === waste ? true :
                option === recycle ? true :
                option === transportation ? true :
                option === publicTransit ? true :
                option === flights ? true :
                false
              }
              key={option} value={option} control={<Radio />} label={option}
            />
          ))}
        </RadioGroup>
      </FormControl>
    // </carbonFootprintContext.Consumer>
  );
}
