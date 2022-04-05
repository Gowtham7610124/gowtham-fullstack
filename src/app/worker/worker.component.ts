import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {
  isShown: boolean = false ; 
  design:boolean = false;
  analysis:boolean = false;
  raw_material:boolean = false;
  start_work:boolean=false;
  finished_product:boolean=false;
  purchase_teams:boolean=false;
  next_day:boolean=false;
  show1:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  toggleShow() {
    this.isShown = ! this.isShown;
  }
  
  design_container(){
    this.design = ! this.design;
  }

  analysis_container(){
    this.analysis = ! this.analysis;
  }

  rawMaterial_container(){
    this.raw_material = ! this.raw_material;
  }

  start_container(){
    this.start_work = ! this.start_work;
  }

  finish_container(){
    this.finished_product = ! this.finished_product;
  }

  purchase_team(){
    this.purchase_teams = ! this.purchase_teams;
  }
  next_container(){
    this.next_day = ! this.next_day;
  }


}
