import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  project_count: number = 0;
  coffee_count: number = 0;
  years_count: number = 0;

  project_count_stop: any = setInterval(()=>{
    this.project_count++;
    if(this.project_count == 1) {
      clearInterval(this.project_count_stop);
    }
  },1500)

  coffee_count_stop: any = setInterval(()=>{
    this.coffee_count++;
    if(this.coffee_count == 543) {
      clearInterval(this.coffee_count_stop);
    }
  }) 

  years_count_stop: any = setInterval(()=>{
    this.years_count++;
    if(this.years_count == 4) {
      clearInterval(this.years_count_stop);
    }
  },500)
  

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
