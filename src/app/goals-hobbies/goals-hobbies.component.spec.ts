import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsHobbiesComponent } from './goals-hobbies.component';

describe('GoalsHobbiesComponent', () => {
  let component: GoalsHobbiesComponent;
  let fixture: ComponentFixture<GoalsHobbiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalsHobbiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoalsHobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
