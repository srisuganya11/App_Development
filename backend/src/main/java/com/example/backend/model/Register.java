package com.example.backend.model;

import jakarta.persistence.*;

@Entity
public class Register {

    @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    

    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "pwd")
    private String password;

    @OneToOne
    @JoinColumn(name = "login_id")
    private Login login;

    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Login getLogin() {
        return login;
    }

    public void setLogin(Login login) {
        this.login = login;
    }

    // Default constructor
    public Register() {}

    // Parameterized constructor
    public Register(Long id, String name, String email, String password, Login login) {
        this.id = id;
        this.name = name;
        
        this.email = email;
        this.password = password;
        this.login = login;
    }
}