import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';


@Component({
  selector: 'app-hero-panel',
  templateUrl: './hero-panel.component.html',
  styleUrls: ['./hero-panel.component.css']
})
export class HeroPanelComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    var options = {
      strings: ['^600Full stack developer.^600 Digital Artist.^600 Teacher.'],
      typeSpeed: 20,
      showCursor: false,
      // smartBackspace: false,
     // shuffle: true,
      //startDelay: 1000,
      // backDelay: 900,
      // fadeOut: true,
      //loop: true,
      // loopCount: 3,
    };
    
    var typed = new Typed('.element', options);
          
  }

  

}
