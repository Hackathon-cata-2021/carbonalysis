package com.github.carbonalysis.domains.footprint;

import java.util.List;
import javax.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/footprint")
public class FootprintDataController {
  private final Logger logger = LoggerFactory.getLogger(FootprintDataController.class);

  @Autowired
  private FootprintDataService footprintDataService;

  @GetMapping
  public ResponseEntity<List<FootprintData>> getAllFootprints() {
    logger.info("Get all request received");
    return new ResponseEntity<>(footprintDataService.getAll(), HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<FootprintData> getFootprintById(@PathVariable Long id) {
    logger.info(" Get all request received");
    return new ResponseEntity<>(footprintDataService.getById(id), HttpStatus.OK);
  }

  @PostMapping
  public ResponseEntity<FootprintData> createFootprint(
      @Valid @RequestBody FootprintData footprintData) {
    logger.info(" Post request received");
    return new ResponseEntity<>(footprintDataService.createFootprintData(footprintData),
        HttpStatus.CREATED);
  }

  @PutMapping("/{id}")
  public ResponseEntity<FootprintData> updateFootprint(@Valid @RequestBody FootprintData footprintData,
      @PathVariable Long id) {
    logger.info(" Put request received");
    return new ResponseEntity<>(footprintDataService.updateFootprintData(id, footprintData),
        HttpStatus.OK);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<FootprintData> deleteFootprint(@PathVariable Long id) {
    logger.info(" Delete request received");
    footprintDataService.deleteFoodprintData(id);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }
}
