package com.pfe.gestionmedical.repository;

import com.pfe.gestionmedical.entity.Role;
import com.pfe.gestionmedical.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findFirstByEmail(String email);
    User findFirstByRole(Role role);

}
