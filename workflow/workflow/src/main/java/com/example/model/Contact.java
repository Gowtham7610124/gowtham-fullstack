package com.example.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Contact {
	@Id
	private String firstname;
	private String lastname;
	private String mail;
	private String message;
	
	
	public Contact() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Contact(String firstname, String lastname, String mail, String message) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.mail = mail;
		this.message = message;
	}
	public String getFirst_name() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getMail() {
		return mail;
	}
	public void setMail(String mail) {
		this.mail = mail;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
}
