package com.example.alumni_network.service;

import com.example.alumni_network.repo.UserRepository; // Corrected import statement
import com.example.alumni_network.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Retrieve all users
    public Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Find a user by ID
    public Optional<User> getUserById(Integer id) {
        return userRepository.findById(id);
    }

    // Save a new user or update an existing one
    public User saveOrUpdateUser(User user) {
        return userRepository.save(user);
    }

    // Delete a user by ID
    public void deleteUser(Integer id) {
        userRepository.deleteById(id);
    }
}
