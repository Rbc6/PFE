package com.pfe.gestionmedical.dto;

import com.pfe.gestionmedical.enums.UserRole;
import lombok.Data;

@Data
public class AuthenticationResponse {
    private String jwt;
    private UserRole userRole;
    private Long userId;
}
