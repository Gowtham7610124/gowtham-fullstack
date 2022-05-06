import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Register } from './register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register:Register = new Register("","","","","")
  details:any;
  constructor(private service:RegisterService) { }

  ngOnInit(): void {
  }
  public registernow(){
    let cnt=this.service.getreg(this.register);
    cnt.subscribe((data: any)=>this.details=data);
  }
}
