import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {
  inputField:any
  disable = true
  todolist = [""]
  index=0
  temp = false
  pending:boolean=true
  view:boolean=false
  user_name:boolean=true
  
  constructor() { }

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
  onview(){
    this.view = this.view=true
    this.user_name=!this.user_name
  }


}
