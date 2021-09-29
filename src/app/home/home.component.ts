import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var options = {
      strings: ['','a Computer Engineering Student.', 'a Web Developer.','a Gamer.','an Anime Lover.'],
      typeSpeed: 80,
      backSpeed: 70,
      loop: true,
    };
    
    var typed = new Typed('.typed', options);
    typed.reset(true)
  }

}
