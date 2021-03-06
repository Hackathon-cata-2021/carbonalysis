package com.github.carbonalysis.domains.users;

import java.security.NoSuchAlgorithmException;
import java.util.List;

public interface UsersService {
  List<Users> getAll();

  Users getById(Long id);

  Users createUser(Users user) throws NoSuchAlgorithmException;

  Users updateUser(Long id, Users user);

  void deleteUser(Long id);

  Users getUserByEmail(String email);
}
