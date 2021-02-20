package com.github.carbonalysis.domains.users;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.github.carbonalysis.domains.address.Address;
import java.sql.Timestamp;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "users")
public class Users {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotNull
  private String email;

  @NotNull
  private String password;

  @NotNull
  private String first_name;

  @NotNull
  private String last_name;

  private Timestamp created_at;

  @JsonIgnore
  private String salt;

  @ManyToOne
  @JoinColumn(name = "address_id")
  @JsonIgnore
  private Address address;

  public Users() {}

  public Users(@NotNull String email, @NotNull String password,
      @NotNull String first_name, @NotNull String last_name, Address address) {
    this.email = email;
    this.password = password;
    this.first_name = first_name;
    this.last_name = last_name;
    this.address = address;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getFirst_name() {
    return first_name;
  }

  public void setFirst_name(String first_name) {
    this.first_name = first_name;
  }

  public String getLast_name() {
    return last_name;
  }

  public void setLast_name(String last_name) {
    this.last_name = last_name;
  }

  public Timestamp getCreated_at() {
    return created_at;
  }

  public void setCreated_at(Timestamp created_at) {
    this.created_at = created_at;
  }

  public Address getAddress() {
    return address;
  }

  public void setAddress(Address address) {
    this.address = address;
  }

  public String getSalt() {
    return salt;
  }

  public void setSalt(String salt) {
    this.salt = salt;
  }

  @Override
  public String toString() {
    return "Users{" +
        "id=" + id +
        ", email='" + email + '\'' +
        ", password='" + password + '\'' +
        ", first_name='" + first_name + '\'' +
        ", last_name='" + last_name + '\'' +
        ", created_at='" + created_at + '\'' +
        ", address=" + address +
        '}';
  }
}
