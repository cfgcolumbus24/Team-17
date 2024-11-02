package com.example.alumni_network.model;

import jakarta.persistence.*;

@Entity
@Table(name = "PersonResidency")
public class PersonResidency {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "PersonID", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "ResidencyID", nullable = false)
    private Residency residency;

    // Getters and Setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Residency getResidency() {
        return residency;
    }

    public void setResidency(Residency residency) {
        this.residency = residency;
    }
}
