import { Component, OnInit } from '@angular/core';
import {skills} from '../../models/skills';
import AOS from 'aos'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skills-panel',
  templateUrl: './skills-panel.component.html',
  styleUrls: ['./skills-panel.component.css']
})
export class SkillsPanelComponent implements OnInit {

  private fragment: string;

  constructor(private route: ActivatedRoute) { }

  skills!: skills[];

  ngOnInit(){

    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
    
    AOS.init({
      offset: 200,
    });

    this.skills=[
      {
        image: './../../assets/skills/python.png',
        name:'Python'
      },
      {
        image: './../../assets/skills/flask.png',
        name:'Flask'
      },
      {
        image: './../../assets/skills/django.png',
        name:'Django'
      },
      {
        image: './../../assets/skills/react.png',
        name:'React'
      },
      {
        image: './../../assets/skills/angular.png',
        name:'Angular'
      },
      {
        image: './../../assets/skills/js.png',
        name:'Typescript'
      },
      {
        image: './../../assets/skills/p5.png',
        name:'P5'
      },
      {
        image: './../../assets/skills/flutter.svg',
        name:'Flutter'
      },
      {
        image: './../../assets/skills/blender.png',
        name:'Blender'
      },
      {
        image: './../../assets/skills/ps.png',
        name:'Photoshop'
      },
      {
        image: './../../assets/skills/java.png',
        name:'Java'
      },
      {
        image: './../../assets/skills/firebase.png',
        name:'Firebase'
      },
    ];
  }

  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }


  }
