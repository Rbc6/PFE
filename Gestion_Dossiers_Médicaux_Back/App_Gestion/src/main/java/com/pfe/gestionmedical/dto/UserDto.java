package com.pfe.gestionmedical.dto;

import com.pfe.gestionmedical.enums.UserRole;
import lombok.Data;

@Data
public class UserDto {
    private Long id;
    private String name;
    private String email;
    private UserRole userRole;
}
