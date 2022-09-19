import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroPanelComponent } from './components/hero-panel/hero-panel.component';
import { ProjectPanelComponent } from './components/project-panel/project-panel.component';
import { SkillsPanelComponent } from './components/skills-panel/skills-panel.component';
import { P5AnimationPageComponent } from './components/p5-animation-page/p5-animation-page.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  imports: [BrowserModule,
    AppRoutingModule, FormsModule, RouterModule.forRoot([
      { path: '', component: HeroPanelComponent },
      { path: 'skills', component: SkillsPanelComponent },
      { path: 'projects', component: ProjectPanelComponent },
      { path: 'contact', component: ContactMeComponent }
    ], { anchorScrolling: 'enabled' }), FontAwesomeModule],
  declarations: [
    AppComponent,
    HeroPanelComponent,
    ProjectPanelComponent,
    SkillsPanelComponent,
    P5AnimationPageComponent,
    ContactMeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
