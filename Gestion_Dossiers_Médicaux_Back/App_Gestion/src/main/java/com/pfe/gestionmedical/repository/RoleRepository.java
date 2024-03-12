package com.pfe.gestionmedical.repository;

import com.pfe.gestionmedical.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role,Long> {
    Role findFirstByLabel(String label);

    Role findFirstById(Long userRole);
}
