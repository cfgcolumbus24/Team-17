package com.example.alumni_network;

import com.example.alumni_network.model.Residency;
import com.example.alumni_network.service.ResidencyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/residencies")
public class ResidencyController {

    private final ResidencyService residencyService;

    @Autowired
    public ResidencyController(ResidencyService residencyService) {
        this.residencyService = residencyService;
    }

    // Get all residencies
    @GetMapping
    public ResponseEntity<Iterable<Residency>> getAllResidencies() {
        Iterable<Residency> residencies = residencyService.getAllResidencies();
        return new ResponseEntity<>(residencies, HttpStatus.OK);
    }

    // Get residency by ID
    @GetMapping("/{id}")
    public ResponseEntity<Residency> getResidencyById(@PathVariable Integer id) {
        Optional<Residency> residency = residencyService.getResidencyById(id);
        return residency.map(res -> new ResponseEntity<>(res, HttpStatus.OK))
                        .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Create a new residency
    @PostMapping
    public ResponseEntity<Residency> createResidency(@RequestBody Residency residency) {
        Residency savedResidency = residencyService.saveOrUpdateResidency(residency);
        return new ResponseEntity<>(savedResidency, HttpStatus.CREATED);
    }

    // Delete a residency
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteResidency(@PathVariable Integer id) {
        if (residencyService.getResidencyById(id).isPresent()) {
            residencyService.deleteResidency(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
