import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: Contact=new Contact("","","","");
  detail:any;

  constructor(private service:ContactService) { }
  
  

  ngOnInit(): void {
    
  }
  public contactNow(){
    let resp=this.service.getInfo(this.contact);
    resp.subscribe((data)=>this.detail=data);
  }
}
