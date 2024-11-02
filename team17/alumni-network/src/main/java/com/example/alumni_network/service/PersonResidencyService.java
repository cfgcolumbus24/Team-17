package com.example.alumni_network.service;

import com.example.alumni_network.model.PersonResidency;
import com.example.alumni_network.repo.PersonResidencyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PersonResidencyService {

    private final PersonResidencyRepository personResidencyRepository;

    @Autowired
    public PersonResidencyService(PersonResidencyRepository personResidencyRepository) {
        this.personResidencyRepository = personResidencyRepository;
    }

    // Create a new PersonResidency
    public PersonResidency createPersonResidency(PersonResidency personResidency) {
        return personResidencyRepository.save(personResidency);
    }

    // Get all PersonResidency records
    public List<PersonResidency> getAllPersonResidencies() {
        return personResidencyRepository.findAll();
    }

    // Get a PersonResidency by ID
    public Optional<PersonResidency> getPersonResidencyById(Integer id) {
        return personResidencyRepository.findById(id);
    }

    // Update a PersonResidency
    public PersonResidency updatePersonResidency(Integer id, PersonResidency updatedPersonResidency) {
        if (personResidencyRepository.existsById(id)) {
            updatedPersonResidency.setId(id);
            return personResidencyRepository.save(updatedPersonResidency);
        }
        return null; // or throw an exception
    }

    // Delete a PersonResidency
    public void deletePersonResidency(Integer id) {
        personResidencyRepository.deleteById(id);
    }
}
