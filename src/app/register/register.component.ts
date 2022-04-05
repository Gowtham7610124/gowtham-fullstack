import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  first_name:string='';
  last_name:string='';
  email:string='';
  password:string='';
  dob:string='';
  constructor() { }

  ngOnInit(): void {
  }
  register(){
    console.log(this.dob,this.email,this.first_name,this.last_name)
  }
}
