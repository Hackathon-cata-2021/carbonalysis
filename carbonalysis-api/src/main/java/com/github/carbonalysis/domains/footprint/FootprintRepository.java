package com.github.carbonalysis.domains.footprint;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FootprintRepository extends JpaRepository<FootprintData, Long> {

}
