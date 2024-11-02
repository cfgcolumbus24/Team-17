package com.example.alumni_network.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

// Entity class representing a residency in the alumni network
@Entity
@Table(name = "residency")
public class Residency {

    @Id
    @Column(name = "residency_id")
    private Integer residencyId;


    @Column(name = "start_date")
    private String startDate; // Consider using LocalDate for date handling

    @Column(name = "end_date")
    private String endDate; // Consider using LocalDate for date handling

    // Getters and Setters
    public Integer getResidencyId() {
        return residencyId;
    }

    public void setResidencyId(Integer residencyId) {
        this.residencyId = residencyId;
    }

   


}
