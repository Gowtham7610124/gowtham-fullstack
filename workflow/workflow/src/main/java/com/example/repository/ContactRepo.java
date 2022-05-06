package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.model.Contact;


@Repository
public interface ContactRepo extends JpaRepository<Contact , String> {
	
}
