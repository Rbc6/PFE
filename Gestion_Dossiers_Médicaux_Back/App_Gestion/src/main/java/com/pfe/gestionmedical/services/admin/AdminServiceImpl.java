package com.pfe.gestionmedical.services.admin;

import com.pfe.gestionmedical.dto.UserDto;
import com.pfe.gestionmedical.entity.Role;
import com.pfe.gestionmedical.entity.User;
import com.pfe.gestionmedical.repository.RoleRepository;
import com.pfe.gestionmedical.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    @Override
    public boolean addUser(User userDto) throws IOException {
        boolean isSuccessful  = false;
        try {
            User user = new User();
            user.setFirstname(userDto.getFirstname());
            user.setLastname(userDto.getLastname());
            user.setEmail(userDto.getEmail());
            user.setPassword(userDto.getPassword());
            System.out.print("Role : "+userDto.getRole().getLabel());
            user.setRole(userDto.getRole());
            user.setTel(userDto.getTel());
            userRepository.save(user);

            isSuccessful = true;
        }catch (Exception e){
            e.printStackTrace();
        }
         return isSuccessful;
    }

    public List<Role> getRoles() {
        return roleRepository.findAll();
    }

    @Override
    public List<UserDto> getAllUsers() {
        return userRepository.findAll().stream().map(User::getUserDto).collect(Collectors.toList());
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public UserDto getUserById(Long id) {
        return userRepository.findById(id).map(User::getUserDto).orElse(null);
    }

    @Override
    public boolean updateUser(Long id, UserDto userDto) throws IOException {
        Optional<User> optionalUser = userRepository.findById(id);

        if(optionalUser.isPresent()){
            User existingUser = optionalUser.get();

            existingUser.setFirstname(userDto.getFirstname());
            existingUser.setLastname(userDto.getLastname());
            existingUser.setEmail(userDto.getEmail());
            existingUser.setPassword(userDto.getPassword());
            existingUser.setTel(Integer.valueOf(userDto.getTel()));
            existingUser.setRole(userDto.getRole());

            userRepository.save(existingUser);
            return true ;
        }
        return false;
    }
}
