import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  first_name: string ='';
  last_name: string='';
  email: string='';
  message: string='';
  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.first_name,this.last_name,this.message,this.email)
  }
}
