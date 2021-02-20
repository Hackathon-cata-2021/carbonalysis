package com.github.carbonalysis.domains.emissions;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "emissions_data")
public class EmissionsData {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotNull
  private int user_id;

  @NotNull
  private Double car;

  @NotNull
  private Double fuel;

  @NotNull
  private Double utility;

  @NotNull
  private Double offsets;

  @NotNull
  private Double total_emissions;

  public EmissionsData() {}

  public EmissionsData(@NotNull int user_id,
      @NotNull Double car, @NotNull Double fuel,
      @NotNull Double utility, @NotNull Double offsets,
      @NotNull Double total_emissions) {
    this.user_id = user_id;
    this.car = car;
    this.fuel = fuel;
    this.utility = utility;
    this.offsets = offsets;
    this.total_emissions = total_emissions;
  }

  public int getUser_id() {
    return user_id;
  }

  public void setUser_id(int user_id) {
    this.user_id = user_id;
  }

  public Double getCar() {
    return car;
  }

  public void setCar(Double car) {
    this.car = car;
  }

  public Double getFuel() {
    return fuel;
  }

  public void setFuel(Double fuel) {
    this.fuel = fuel;
  }

  public Double getUtility() {
    return utility;
  }

  public void setUtility(Double utility) {
    this.utility = utility;
  }

  public Double getOffsets() {
    return offsets;
  }

  public void setOffsets(Double offsets) {
    this.offsets = offsets;
  }

  public Double getTotal_emissions() {
    return total_emissions;
  }

  public void setTotal_emissions(Double total_emissions) {
    this.total_emissions = total_emissions;
  }

  @Override
  public String toString() {
    return "EmissionsData{" +
        "id=" + id +
        ", user_id=" + user_id +
        ", car=" + car +
        ", fuel=" + fuel +
        ", utility=" + utility +
        ", offsets=" + offsets +
        ", total_emissions=" + total_emissions +
        '}';
  }
}
