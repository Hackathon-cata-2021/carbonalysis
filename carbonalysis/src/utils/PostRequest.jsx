import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import HttpHelper from './HttpHelper';
import { carbonFootprintContext } from '../context/CarbonFootprintContext';

const FootprintPostRequest = () => {
  const {
    householdSize, setHouseholdSize,
    homeSize, setHomeSize,
    food, setFood,
    water, setWater,
    purchases, setPurchases,
    waste, setWaste,
    transportation, setTransportation,
    publicTransit, setPublicTransit,
    flights, setFlights,
    totalFootprint, setTotalFootprint
  } = useContext(carbonFootprintContext);

  const payload = {

  };
  const history = useHistory();

  HttpHelper('/footprint', 'POST', payload)
    .then((response) => {
      if (response.ok) {
        history.push('/carbon-emissions');
      } else {
        throw new Error('oops something went wrong');
      }
    })
    .catch((error) => {
      throw new Error(error);
    })
}

export default FootprintPostRequest;