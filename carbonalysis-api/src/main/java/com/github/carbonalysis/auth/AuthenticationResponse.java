package com.github.carbonalysis.auth;

import com.github.carbonalysis.domains.users.Users;

public class AuthenticationResponse {
  private final String jwt;

  private final String user;

  public AuthenticationResponse(String jwt, String user) {
    this.jwt = jwt;
    this.user = user;
  }

  public String getJwt() {
    return jwt;
  }

  public String getUser() {
    return user;
  }
}
