import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'] 
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  } 

  images = ['../../assets/images/profile-pic1.jpg',
            '../../assets/images/profile-pic2.jpg',
            '../../assets/images/profile-pic3.jpg',
            '../../assets/images/profile-pic4.jpg'];

}
