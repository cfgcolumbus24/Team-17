package com.example.alumni_network;

import com.example.alumni_network.model.Residency;
import com.example.alumni_network.service.ResidencyService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class ResidencyController {

    private final ResidencyService residencyService;

    public ResidencyController(ResidencyService residencyService) {
        this.residencyService = residencyService;
    }

    // Get all residencies
    @GetMapping("/residencies")
    public ResponseEntity<List<Residency>> getAllResidencies() {
        try {
            Iterable<Residency> residencies = residencyService.getAllResidencies();
            List<Residency> list = new ArrayList<>();
            for (Residency residency : residencies) {
                list.add(residency);
            }
            return new ResponseEntity<>(list, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Get residency by ID
    @GetMapping("/residency/{id}")
    public ResponseEntity<Residency> getResidencyById(@PathVariable Integer id) {
        Optional<Residency> residency = residencyService.getResidencyById(id);
        return residency.map(res -> new ResponseEntity<>(res, HttpStatus.OK))
                        .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Create a new residency
    @PostMapping("/residency")
    public ResponseEntity<Residency> createResidency(@RequestBody Residency residency) {
        try {
            Residency savedResidency = residencyService.saveOrUpdateResidency(residency);
            return new ResponseEntity<>(savedResidency, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Update an existing residency
    @PutMapping("/residency/{id}")
    public ResponseEntity<Residency> updateResidency(@PathVariable Integer id, @RequestBody Residency residency) {
        Optional<Residency> residencyData = residencyService.getResidencyById(id);

        if (residencyData.isPresent()) {
            residency.setResidencyId(id); // Set the ID for the existing residency
            Residency updatedResidency = residencyService.saveOrUpdateResidency(residency);
            return new ResponseEntity<>(updatedResidency, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Delete a residency by ID
    @DeleteMapping("/residency/{id}")
    public ResponseEntity<HttpStatus> deleteResidency(@PathVariable Integer id) {
        try {
            residencyService.deleteResidency(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
