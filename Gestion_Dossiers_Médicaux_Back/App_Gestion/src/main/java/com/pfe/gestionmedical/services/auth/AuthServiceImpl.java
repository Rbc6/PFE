package com.pfe.gestionmedical.services.auth;


import com.pfe.gestionmedical.entity.Role;
import com.pfe.gestionmedical.entity.User;
import com.pfe.gestionmedical.repository.RoleRepository;
import com.pfe.gestionmedical.repository.UserRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    @PostConstruct
    public void createAdminAccount() {
        Role adminRole = roleRepository.findFirstByLabel("ADMIN");
        User adminAccount = userRepository.findFirstByRole(adminRole);

        if (adminAccount == null) {
            User newAdminAccount = new User();
            newAdminAccount.setFirstname("Admin");
            newAdminAccount.setEmail("admin@test.com");
            newAdminAccount.setPassword(new BCryptPasswordEncoder().encode("admin"));
            newAdminAccount.setRole(adminRole);
            userRepository.save(newAdminAccount);
            System.out.println("Admin account created");
        }
    }

}
