package com.example.alumni_network.repo;

import com.example.alumni_network.model.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TagRepository extends JpaRepository<Tag, Integer> {
    // You can define custom query methods here if needed
}
