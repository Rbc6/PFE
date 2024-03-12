package com.pfe.gestionmedical.services.admin;

import com.pfe.gestionmedical.dto.UserDto;
import com.pfe.gestionmedical.entity.Role;
import com.pfe.gestionmedical.entity.User;

import java.io.IOException;
import java.util.List;

public interface AdminService {
    boolean addUser(User userDto) throws IOException;
    List<Role> getRoles() ;

    List<UserDto> getAllUsers();

    void deleteUser(Long id);

    UserDto getUserById(Long id);

    boolean updateUser(Long id, UserDto userDto) throws IOException;
}
