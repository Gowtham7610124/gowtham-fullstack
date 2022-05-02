import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  constructor() { }
  inputField:any
  disable = true
  todolist = [""]
  index=0
  temp = false
  pending:boolean=true
  ngOnInit(): void {
  }
  submit(){
    this.temp = true
    this.todolist.push(this.inputField)
    console.log(this.todolist)
  }

  onKey(event:any){
    if(this.inputField !== ''){
      this.disable = false
    }
    else{
      this.disable = true
    }
  }
  changing(){
    this.pending=false
  }
  
}
