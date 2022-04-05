import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-office-staff',
  templateUrl: './office-staff.component.html',
  styleUrls: ['./office-staff.component.css']
})
export class OfficeStaffComponent implements OnInit {
  
  constructor() { }
  first:boolean=false;
  second:boolean=false;
  third:boolean=false;
  forth:boolean=false;
  fifth:boolean=false;
  sixth:boolean=false;
  seventh:boolean=false;
  ngOnInit(): void {
  }
  first_container(){
    this.first = ! this.first;
  }

  second_container(){
    this.second = ! this.second;
  }

  third_container(){
    this.third = ! this.third;
  }

  forth_container(){
    this.forth = ! this.forth;
  }

  fifth_container(){
    this.fifth = ! this.fifth;
  }

  sixth_container(){
    this.sixth = ! this.sixth;
  }

  seventh_container(){
    this.seventh = ! this.seventh;
  }
  
 
}
