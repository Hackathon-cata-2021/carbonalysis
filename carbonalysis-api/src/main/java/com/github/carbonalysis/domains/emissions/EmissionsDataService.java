package com.github.carbonalysis.domains.emissions;

import java.util.List;

public interface EmissionsDataService {
  List<EmissionsData> getAll();

  EmissionsData getById(Long id);

  EmissionsData createEmissionsData(EmissionsData emissionsData);

  EmissionsData updateEmissionsData(Long id, EmissionsData emissionsData);

  void deleteEmissionsData(Long id);
}
