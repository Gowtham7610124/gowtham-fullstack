package com.example.model;

import javax.persistence.Entity;
import javax.persistence.Id;

import org.springframework.web.bind.annotation.CrossOrigin;
@CrossOrigin(origins = "http://localhost:4200")
@Entity
public class Register {
	@Id
	private String firstName;
	private String lastName;
	private String email;
	private String password;
	private String dob;
	
	
	public Register() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Register(String firstName, String lastName, String email, String password, String dob) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.dob = dob;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirst_name(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLast_name(String lastName) {
		this.lastName = lastName;
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
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
}
