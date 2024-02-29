package com.pfe.gestionmedical.dto;


import com.pfe.gestionmedical.entity.Role;
import lombok.Data;

@Data
public class UserDto {
    private Long id;
    private String name;
    private String email;
    private Role userRole;
}
