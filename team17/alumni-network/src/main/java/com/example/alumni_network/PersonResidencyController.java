package com.example.alumni_network;

import com.example.alumni_network.model.PersonResidency;
import com.example.alumni_network.service.PersonResidencyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/person-residency")
public class PersonResidencyController {

    private final PersonResidencyService personResidencyService;

    @Autowired
    public PersonResidencyController(PersonResidencyService personResidencyService) {
        this.personResidencyService = personResidencyService;
    }

    // Create a new PersonResidency
    @PostMapping
    public ResponseEntity<PersonResidency> createPersonResidency(@RequestBody PersonResidency personResidency) {
        PersonResidency createdPersonResidency = personResidencyService.createPersonResidency(personResidency);
        return new ResponseEntity<>(createdPersonResidency, HttpStatus.CREATED);
    }

    // Get all PersonResidency records
    @GetMapping
    public ResponseEntity<List<PersonResidency>> getAllPersonResidencies() {
        List<PersonResidency> personResidencies = personResidencyService.getAllPersonResidencies();
        return new ResponseEntity<>(personResidencies, HttpStatus.OK);
    }

    // Get a PersonResidency by ID
    @GetMapping("/{id}")
    public ResponseEntity<PersonResidency> getPersonResidencyById(@PathVariable Integer id) {
        Optional<PersonResidency> personResidency = personResidencyService.getPersonResidencyById(id);

        System.out.println(personResidency);
        
        return personResidency.map(residency -> new ResponseEntity<>(residency, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Update a PersonResidency
    @PutMapping("/{id}")
    public ResponseEntity<PersonResidency> updatePersonResidency(@PathVariable Integer id, @RequestBody PersonResidency updatedPersonResidency) {
        PersonResidency personResidency = personResidencyService.updatePersonResidency(id, updatedPersonResidency);
        return personResidency != null ? new ResponseEntity<>(personResidency, HttpStatus.OK) 
                                       : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // Delete a PersonResidency
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePersonResidency(@PathVariable Integer id) {
        personResidencyService.deletePersonResidency(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
