import { Component, OnInit } from '@angular/core';
import AOS from 'aos'
import {projects} from '../../models/projects';
import {animations} from '../../models/animations';
// import 'p5';
// import * as p5 from 'p5';



declare function collapse():void;

declare function beef():void;

// declare function sketch():void;

declare function sketchTwo():void;
declare function sketchThree():void;
declare function sketchFour():void;
declare function sketchFive():void;



@Component({
  selector: 'app-project-panel',
  templateUrl: './project-panel.component.html',
  styleUrls: ['./project-panel.component.css']
})
export class ProjectPanelComponent implements OnInit {

  projects!: projects[];
  animations!: animations[];

  constructor() { }

  ngOnInit(): void {
    collapse();
    beef();
    sketchThree();
    sketchTwo();
    AOS.init({
      offset: 250,
    }); 

    this.animations=[{
      name:"Spinner",
      class:"spinning",
    }]

//     this.projects=[
//       {
//         image:'./../../assets/project/phone.png',
//         name:'Poop alert',
//         description:'this is an app',
//         stack:'Flutter and Firebase'
//     },
//     {
//       image:'./../../assets/project/phone.png',
//       name:'Study Buddy',
//       description:'this is an chrome extenstion',
//       stack:'React and HTML/CSS'
//   },
//   {
//     image:'./../../assets/project/phone.png',
//     name:'Study Buddy',
//     description:'this is an chrome extenstion',
//     stack:'React and HTML/CSS'
// },
//   ]
  }

}
