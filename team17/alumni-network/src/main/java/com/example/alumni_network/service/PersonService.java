package com.example.alumni_network.service;

import com.example.alumni_network.repo.PersonRepository; // Corrected import statement
import com.example.alumni_network.model.Person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PersonService {

    private final PersonRepository personRepository;

    @Autowired
    public PersonService(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    // Retrieve all persons
    public Iterable<Person> getAllPersons() {
        return personRepository.findAll();
    }

    // Find a person by ID
    public Optional<Person> getPersonById(Integer id) {
        return personRepository.findById(id);
    }

    // Save a new person or update an existing one
    public Person saveOrUpdatePerson(Person person) {
        return personRepository.save(person);
    }

    // Delete a person by ID
    public void deletePerson(Integer id) {
        personRepository.deleteById(id);
    }
}
