import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P5AnimationPageComponent } from './p5-animation-page.component';

describe('P5AnimationPageComponent', () => {
  let component: P5AnimationPageComponent;
  let fixture: ComponentFixture<P5AnimationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P5AnimationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P5AnimationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
