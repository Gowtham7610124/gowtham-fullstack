package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Contact;
import com.example.repository.ContactRepo;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ContactController {
	@Autowired
	private ContactRepo cntrepo;
	@PostMapping("addContact")
	public Contact addContactDetails(@RequestBody Contact cd){
		return cntrepo.save(cd);
	}
	@PutMapping("editContact")
	public Contact editContactDetails(@RequestBody Contact cd){
		return cntrepo.save(cd);
	}
	
	@DeleteMapping("deleteContact")
	public String deleteContact() {
		String result=" ";
		try {
			cntrepo.deleteAll();
			result="All Records Deleted Successfully";
		}
		catch(Exception e){
			result="Error Occur";
		}
		return result;
	}
	@GetMapping("getAllContact2")
	public List<Contact> getContact2(){
		return cntrepo.findAll();
	}
}
