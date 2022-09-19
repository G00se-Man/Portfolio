import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsPanelComponent } from './skills-panel.component';

describe('SkillsPanelComponent', () => {
  let component: SkillsPanelComponent;
  let fixture: ComponentFixture<SkillsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
