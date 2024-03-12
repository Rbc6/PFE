package com.pfe.gestionmedical.controller;

import com.pfe.gestionmedical.dto.UserDto;
import com.pfe.gestionmedical.entity.Role;
import com.pfe.gestionmedical.entity.User;
import com.pfe.gestionmedical.repository.RoleRepository;
import com.pfe.gestionmedical.services.admin.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {

    private final AdminService adminService;

    @PostMapping("/user")
    public ResponseEntity<?> addUser(@ModelAttribute User userDto) throws IOException{
        boolean isSuccessful = adminService.addUser(userDto);
        if (isSuccessful) {
            return ResponseEntity.status(HttpStatus.CREATED).build();
        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

    @GetMapping("/role")
    public List<Role> getRoles() {
        return adminService.getRoles();
    }

    @GetMapping("/users")
    public ResponseEntity<?> getAllUsers() {
        return ResponseEntity.ok(adminService.getAllUsers());
    }

    @DeleteMapping("/user/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        adminService.deleteUser(id);
        return ResponseEntity.ok(null);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Long id) {
        return ResponseEntity.ok(adminService.getUserById(id));
    }

    @PutMapping("/user/{id}")
    public ResponseEntity<Void> updateUser(@PathVariable Long id, @ModelAttribute UserDto userDto) throws IOException {
        try {
            boolean isSuccessful = adminService.updateUser(id, userDto);

            if (isSuccessful) {
                return ResponseEntity.status(HttpStatus.OK).build();
            }

            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

}
