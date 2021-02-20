package com.github.carbonalysis.domains.footprint;

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
public class FootprintDataServiceImpl implements FootprintDataService{

  private final Logger logger = LoggerFactory.getLogger(FootprintDataServiceImpl.class);

  @Autowired
  private FootprintRepository footprintRepository;

  @Override
  public List<FootprintData> getAll() {
    List<FootprintData> footprintList = new ArrayList<>();

    try {
      footprintList = footprintRepository.findAll();
    } catch (DataAccessException e) {
      logger.error(e.getMessage());
    }

    return footprintList;
  }

  @Override
  public FootprintData getById(Long id) {
    Optional<FootprintData> footprint = Optional.ofNullable(null);

    try {
      footprint = footprintRepository.findById(id);
    } catch (DataAccessException e) {
      logger.error(e.getMessage());
    }

    if(footprint.isEmpty()) {
      throw new ResourceNotFound();
    } else {
      return footprint.get();
    }
  }

  @Override
  public FootprintData createFootprintData(FootprintData footprintData) {
    FootprintData postedFootprint = null;

    try {
      postedFootprint = footprintRepository.save(footprintData);
    } catch (DataAccessException e) {
      logger.error(e.getMessage());
    }

    return postedFootprint;
  }

  @Override
  public FootprintData updateFootprintData(Long id, FootprintData footprintData) {
    FootprintData updatedFootprint = null;

    try {
      Optional<FootprintData> footprintToUpdate = footprintRepository.findById(id);
      if (footprintToUpdate.isEmpty()) {
        throw new ResourceNotFound();
      } else {
        updatedFootprint = footprintRepository.save(footprintData);
      }
    } catch (DataAccessException e) {
      logger.error(e.getMessage());
    }

    return updatedFootprint;
  }

  @Override
  public void deleteFoodprintData(Long id) {
    try {
      footprintRepository.deleteById(id);
    } catch (DataAccessException e) {
      logger.error(e.getMessage());
    }
  }
}
