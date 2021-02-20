package com.github.carbonalysis.domains.emissions;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmissionsRepository extends JpaRepository<EmissionsData, Long> {

}
