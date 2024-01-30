import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlanificationComponent } from './add-planification.component';

describe('AddPlanificationComponent', () => {
  let component: AddPlanificationComponent;
  let fixture: ComponentFixture<AddPlanificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlanificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPlanificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
