import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroPanelComponent } from './hero-panel.component';

describe('HeroPanelComponent', () => {
  let component: HeroPanelComponent;
  let fixture: ComponentFixture<HeroPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
