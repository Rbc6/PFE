package com.pfe.gestionmedical.dto;


import com.pfe.gestionmedical.entity.Role;
import lombok.Data;

@Data
public class UserDto {
    private Long id;
    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private String tel;
    private Role role;


}
