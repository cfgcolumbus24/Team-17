package com.example.alumni_network.model;

import jakarta.persistence.*;
import java.util.Set;

@Entity
@Table(name = "Residencies")  
public class Residency {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Integer id;

    @Column(name = "Residency_Name", nullable = false)
    private String residencyName;

    @Column(name = "Year", nullable = false)
    private Integer year;

    //@OneToMany(mappedBy = "residency")
   // private Set<PersonResidency> personResidencies;

    // Getters and Setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getResidencyName() {
        return residencyName;
    }

    public void setResidencyName(String residencyName) {
        this.residencyName = residencyName;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    // public Set<PersonResidency> getPersonResidencies() {
    //     return personResidencies;
    // }

    // public void setPersonResidencies(Set<PersonResidency> personResidencies) {
    //     this.personResidencies = personResidencies;
    // }
}
