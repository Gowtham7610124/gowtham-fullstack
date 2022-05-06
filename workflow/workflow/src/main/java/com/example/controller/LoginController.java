package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.model.Login;
import com.example.repository.LoginRepo;

@RestController
public class LoginController {
	@Autowired
	private LoginRepo lgnrepo;
	@PostMapping("addLogin")
	public Login addContactDetails(@RequestBody Login cd){
		return lgnrepo.save(cd);
	}
	@PutMapping("editLogin")
	public Login editContactDetails(@RequestBody Login cd){
		return lgnrepo.save(cd);
	}
	
	@DeleteMapping("deleteLogin")
	public String deleteLogin() {
		String result=" ";
		try {
			lgnrepo.deleteAll();
			result="All Records Deleted Successfully";
		}
		catch(Exception e){
			result="Error Occur";
		}
		return result;
	}
	@GetMapping("getAllContact1")
	public List<Login> getContact1(){
		return lgnrepo.findAll();
	}
}
