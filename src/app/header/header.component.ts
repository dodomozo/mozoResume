import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.nav-link').on('click',
      function(): void
      {
        $('.navbar-collapse').toggle(); 
      }
    );
    $('.navbar-toggler').on('click',
    function(): void
      {
        $('.navbar-collapse').toggle();
      }
    );
  }
}
