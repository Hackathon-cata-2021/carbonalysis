package com.github.carbonalysis.domains.emissions;

public class EmissionsDataStrings {
  private int user_id;

  private String car;

  private Fuel fuel;

  private Utilit utility;

  private Double offsets;

  public EmissionsDataStrings() {
  }

  public EmissionsDataStrings(int user_id, String car,
      Fuel fuel, Utilit utility, Double offsets) {
    this.user_id = user_id;
    this.car = car;
    this.fuel = fuel;
    this.utility = utility;
    this.offsets = offsets;
  }

  public int getUser_id() {
    return user_id;
  }

  public void setUser_id(int user_id) {
    this.user_id = user_id;
  }

  public String getCar() {
    return car;
  }

  public void setCar(String car) {
    this.car = car;
  }

  public Fuel getFuel() {
    return fuel;
  }

  public void setFuel(Fuel fuel) {
    this.fuel = fuel;
  }

  public Utilit getUtility() {
    return utility;
  }

  public void setUtility(Utilit utility) {
    this.utility = utility;
  }

  public Double getOffsets() {
    return offsets;
  }

  public void setOffsets(Double offsets) {
    this.offsets = offsets;
  }

  @Override
  public String toString() {
    return "EmissionsDataStrings{" +
        "user_id=" + user_id +
        ", car='" + car + '\'' +
        ", fuel=" + fuel +
        ", utility=" + utility +
        ", offsets=" + offsets +
        '}';
  }
}
