package com.pfe.gestionmedical.dto;

import com.pfe.gestionmedical.entity.Role;
import lombok.Data;

@Data
public class AuthenticationResponse {
    private String jwt;
    private Role role;
    private Long userId;
}
