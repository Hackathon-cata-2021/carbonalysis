package com.github.carbonalysis;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ApplicationRunner {
  private static Logger logger = LogManager.getLogger(ApplicationRunner.class);

  public static void main(String[] args) {
    SpringApplication.run(ApplicationRunner.class);
  }
}
