package com.example.alumni_network.repo;

import com.example.alumni_network.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends JpaRepository<Post, Integer> {
    // You can define custom query methods here if needed
}
