package com.github.carbonalysis.domains.footprint;

import java.util.Arrays;

public class FootprintDataStrings {
  private int user_id;

  private String[] householdSize;

  private String[] homeSize;

  private String[] food;

  private String[] water1;

  private String[] water2;

  private String[] purchases;

  private String[] waste;

  private String[] transportation;

  private String[] publicTransit;

  private String[] flights;

  private int recycling;

  public FootprintDataStrings() {
  }

  public FootprintDataStrings(int user_id, String[] householdSize, String[] homeSize,
      String[] food, String[] water1, String[] water2, String[] purchases, String[] waste,
      String[] transportation, String[] publicTransit, String[] flights, int recycling) {
    this.user_id = user_id;
    this.householdSize = householdSize;
    this.homeSize = homeSize;
    this.food = food;
    this.water1 = water1;
    this.water2 = water2;
    this.purchases = purchases;
    this.waste = waste;
    this.transportation = transportation;
    this.publicTransit = publicTransit;
    this.flights = flights;
    this.recycling = recycling;
  }

  public int getUser_id() {
    return user_id;
  }

  public void setUser_id(int user_id) {
    this.user_id = user_id;
  }

  public String[] getHouseholdSize() {
    return householdSize;
  }

  public void setHouseholdSize(String[] householdSize) {
    this.householdSize = householdSize;
  }

  public String[] getHomeSize() {
    return homeSize;
  }

  public void setHomeSize(String[] homeSize) {
    this.homeSize = homeSize;
  }

  public String[] getFood() {
    return food;
  }

  public void setFood(String[] food) {
    this.food = food;
  }

  public String[] getWater1() {
    return water1;
  }

  public void setWater1(String[] water1) {
    this.water1 = water1;
  }

  public String[] getWater2() {
    return water2;
  }

  public void setWater2(String[] water2) {
    this.water2 = water2;
  }

  public String[] getPurchases() {
    return purchases;
  }

  public void setPurchases(String[] purchases) {
    this.purchases = purchases;
  }

  public String[] getWaste() {
    return waste;
  }

  public void setWaste(String[] waste) {
    this.waste = waste;
  }

  public String[] getTransportation() {
    return transportation;
  }

  public void setTransportation(String[] transportation) {
    this.transportation = transportation;
  }

  public String[] getPublicTransit() {
    return publicTransit;
  }

  public void setPublicTransit(String[] publicTransit) {
    this.publicTransit = publicTransit;
  }

  public String[] getFlights() {
    return flights;
  }

  public void setFlights(String[] flights) {
    this.flights = flights;
  }

  public int getRecycling() {
    return recycling;
  }

  public void setRecycling(int recycling) {
    this.recycling = recycling;
  }

  @Override
  public String toString() {
    return "FootprintDataStrings{" +
        "user_id=" + user_id +
        ", householdSize=" + Arrays.toString(householdSize) +
        ", homesize=" + Arrays.toString(homeSize) +
        ", food=" + Arrays.toString(food) +
        ", water1=" + Arrays.toString(water1) +
        ", water2=" + Arrays.toString(water2) +
        ", purchases=" + Arrays.toString(purchases) +
        ", waste=" + Arrays.toString(waste) +
        ", transportation=" + Arrays.toString(transportation) +
        ", publicTransit=" + Arrays.toString(publicTransit) +
        ", flights=" + Arrays.toString(flights) +
        ", recycling=" + Integer.toString(recycling) +
        '}';
  }
}
