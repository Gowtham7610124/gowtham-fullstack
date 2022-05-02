import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }
  
  public getInfo(contact: Contact){
    return this.http.post("http://localhost:8080/addContact",contact)
  }
}



