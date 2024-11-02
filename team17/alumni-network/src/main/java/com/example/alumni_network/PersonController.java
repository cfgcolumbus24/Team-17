package com.example.alumni_network;

import com.example.alumni_network.model.Person;
import com.example.alumni_network.service.PersonService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class PersonController {

    private final PersonService personService;

    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    // Get a specific person by ID
    @GetMapping("/person/{id}")
    public ResponseEntity<Optional<Person>> getPersonById(@PathVariable Integer id) {
        Optional<Person> person = personService.getPersonById(id);
        return person.isPresent()
                ? new ResponseEntity<>(person, HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // Create a new person
    @PostMapping("/person")
    public ResponseEntity<Person> createPerson(@RequestBody Person person) {
        try {
            Person savedPerson = personService.saveOrUpdatePerson(person);
            return new ResponseEntity<>(savedPerson, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Get all persons
    @GetMapping("/persons")
    public ResponseEntity<List<Person>> getAllPersons() {
        try {
            Iterable<Person> persons = personService.getAllPersons();
            List<Person> list = new ArrayList<>();
            for (Person element : persons) {
                    list.add(element);
            }
            return new ResponseEntity<>(list, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Update an existing person by ID
    @PutMapping("/person/{id}")
    public ResponseEntity<Person> updatePerson(@PathVariable Integer id, @RequestBody Person updatedPerson) {
        Optional<Person> personData = personService.getPersonById(id);

        if (personData.isPresent()) {
            Person person = personData.get();
            person.setFirstName(updatedPerson.getFirstName());
            person.setLastName(updatedPerson.getLastName());
            person.setMedia(updatedPerson.getMedia());
            person.setEmail(updatedPerson.getEmail());
            person.setPortfolioLink(updatedPerson.getPortfolioLink());
            person.setLocation(updatedPerson.getLocation());
            person.setInstagramUrl(updatedPerson.getInstagramUrl());

            return new ResponseEntity<>(personService.saveOrUpdatePerson(person), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Delete a person by ID
    @DeleteMapping("/person/{id}")
    public ResponseEntity<HttpStatus> deletePerson(@PathVariable Integer id) {
        try {
            personService.deletePerson(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
