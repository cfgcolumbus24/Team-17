package com.example.alumni_network.repo;

import com.example.alumni_network.model.Residency;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResidencyRepository extends CrudRepository<Residency, Integer> {
    
}
