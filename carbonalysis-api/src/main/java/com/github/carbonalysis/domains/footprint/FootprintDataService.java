package com.github.carbonalysis.domains.footprint;

import java.util.List;

public interface FootprintDataService {
  List<FootprintData> getAll();

  FootprintData getById(Long id);

  FootprintData createFootprintData(FootprintData footprintData);

  FootprintData updateFootprintData(Long id, FootprintData footprintData);

  void deleteFoodprintData(Long id);
}
