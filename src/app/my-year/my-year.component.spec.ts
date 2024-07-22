import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyYearComponent } from './my-year.component';

describe('MyYearComponent', () => {
  let component: MyYearComponent;
  let fixture: ComponentFixture<MyYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyYearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
