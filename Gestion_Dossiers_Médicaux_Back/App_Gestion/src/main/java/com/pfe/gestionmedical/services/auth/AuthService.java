package com.pfe.gestionmedical.services.auth;

import com.pfe.gestionmedical.dto.SignupRequest;
import com.pfe.gestionmedical.dto.UserDto;

public interface AuthService {
    UserDto createCustomer(SignupRequest signupRequest);

    boolean hasCustomerWithEmail(String email);
}
