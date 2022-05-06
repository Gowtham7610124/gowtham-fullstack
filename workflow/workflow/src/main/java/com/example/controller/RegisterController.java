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

import com.example.model.Register;
import com.example.repository.RegisterRepo;
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class RegisterController {
		@Autowired
		private RegisterRepo regRepo;
		@PostMapping("addRegister")
		public Register addContactDetails(@RequestBody Register cd){
			return regRepo.save(cd);
		}
		@PutMapping("editRegister")
		public Register editContactDetails(@RequestBody Register cd){
			return regRepo.save(cd);
		}
		
		@DeleteMapping("deleteRegister")
		public String deleteRegister() {
			String result=" ";
			try {
				regRepo.deleteAll();
				result="All Records Deleted Successfully";
			}
			catch(Exception e){
				result="Error Occur";
			}
			return result;
		}
		@GetMapping("getAllContact")
		public List<Register> getContact(){
			return regRepo.findAll();
		}
	}


