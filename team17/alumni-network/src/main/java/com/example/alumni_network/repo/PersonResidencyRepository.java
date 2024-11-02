package com.example.alumni_network.repo;

import com.example.alumni_network.model.PersonResidency;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonResidencyRepository extends JpaRepository<PersonResidency, Integer> {
    // You can define custom query methods here if needed
}
