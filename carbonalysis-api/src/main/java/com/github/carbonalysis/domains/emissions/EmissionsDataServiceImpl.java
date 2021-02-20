package com.github.carbonalysis.domains.emissions;

import com.github.carbonalysis.exceptions.ResourceNotFound;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
//import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class EmissionsDataServiceImpl implements EmissionsDataService{

  private final Logger logger = LoggerFactory.getLogger(EmissionsDataServiceImpl.class);

  @Autowired
  private EmissionsRepository emissionsRepository;

  @Override
  public List<EmissionsData> getAll() {
    List<EmissionsData> emissionsList = new ArrayList<>();

    try {
      emissionsList = emissionsRepository.findAll();
    } catch (DataAccessException e) {
      logger.error(e.getMessage());
    }

    return emissionsList;
  }

  @Override
  public EmissionsData getById(Long id) {
    Optional<EmissionsData> emissions = Optional.ofNullable(null);

    try {
      emissions = emissionsRepository.findById(id);
    } catch (DataAccessException e) {
      logger.error(e.getMessage());
    }

    if(emissions.isEmpty()) {
      throw new ResourceNotFound();
    } else {
      return emissions.get();
    }
  }

  @Override
  public EmissionsData createEmissionsData(EmissionsData emissionsData) {
    EmissionsData postedEmissions = null;

    try {
      postedEmissions = emissionsRepository.save(emissionsData);
    } catch (DataAccessException e) {
      logger.error(e.getMessage());
    }

    return postedEmissions;
  }

  @Override
  public EmissionsData updateEmissionsData(Long id, EmissionsData emissionsData) {
    EmissionsData updatedEmissionsData = null;

    try {
      Optional<EmissionsData> emissionsToUpdate = emissionsRepository.findById(id);
      if(emissionsToUpdate.isEmpty()) {
        throw new ResourceNotFound();
      } else {
        updatedEmissionsData = emissionsRepository.save(emissionsData);
      }
    } catch (DataAccessException e) {
      logger.error(e.getMessage());
    }

    return updatedEmissionsData;
  }

  @Override
  public void deleteEmissionsData(Long id) {
    try {
      emissionsRepository.deleteById(id);
    } catch (DataAccessException e) {
      logger.error(e.getMessage());
    }
  }
}
