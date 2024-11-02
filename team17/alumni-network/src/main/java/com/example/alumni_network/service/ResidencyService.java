package com.example.alumni_network.service;

import com.example.alumni_network.model.Residency;
import com.example.alumni_network.repo.ResidencyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ResidencyService {

    private final ResidencyRepository residencyRepository;

    @Autowired
    public ResidencyService(ResidencyRepository residencyRepository) {
        this.residencyRepository = residencyRepository;
    }

    // Retrieve all residencies
    public Iterable<Residency> getAllResidencies() {
        return residencyRepository.findAll();
    }

    // Find a residency by ID
    public Optional<Residency> getResidencyById(Integer id) {
        return residencyRepository.findById(id);
    }

    // Save a new residency or update an existing one
    public Residency saveOrUpdateResidency(Residency residency) {
        return residencyRepository.save(residency);
    }

    // Delete a residency by ID
    public void deleteResidency(Integer id) {
        residencyRepository.deleteById(id);
    }

}