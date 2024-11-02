package com.example.alumni_network.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

// Entity class representing a user in the alumni network
@Entity
@Table(name = "Users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Integer id;

    @Column(name = "Name", nullable = false)
    private String name;

    @Column(name = "Bio", length = 100)
    private String bio;

    @Column(name = "Email", nullable = false, unique = true)
    private String email;

    @Column(name = "Portfolio", length = 255)
    private String portfolio;

    @Column(name = "Picture_URL", length = 255)
    private String pictureUrl;

    @Column(name = "Residency_ID", nullable = false)
    private Integer residencyId;

    @Column(name = "Socials", length = 100)
    private String socials;

    // Getters and Setters for each attribute
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPortfolio() {
        return portfolio;
    }

    public void setPortfolio(String portfolio) {
        this.portfolio = portfolio;
    }

    public String getPictureUrl() {
        return pictureUrl;
    }

    public void setPictureUrl(String pictureUrl) {
        this.pictureUrl = pictureUrl;
    }

    public Integer getResidencyId() {
        return residencyId;
    }

    public void setResidencyId(Integer residencyId) {
        this.residencyId = residencyId;
    }

    public String getSocials() {
        return socials;
    }

    public void setSocials(String socials) {
        this.socials = socials;
    }
}
