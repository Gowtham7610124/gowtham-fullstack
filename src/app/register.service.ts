import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from './register/register';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  public getreg(register:Register){
    return this.http.post("http://localhost:8080/addRegister",register)
  }
}
