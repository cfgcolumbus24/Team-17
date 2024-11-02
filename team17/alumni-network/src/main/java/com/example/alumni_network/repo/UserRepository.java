package com.example.alumni_network.repo;

import com.example.alumni_network.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    
    // Additional query methods can be defined here if needed
}
