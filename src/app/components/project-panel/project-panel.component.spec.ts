import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPanelComponent } from './project-panel.component';

describe('ProjectPanelComponent', () => {
  let component: ProjectPanelComponent;
  let fixture: ComponentFixture<ProjectPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
