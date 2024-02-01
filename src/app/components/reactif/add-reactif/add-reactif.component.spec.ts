import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReactifComponent } from './add-reactif.component';

describe('AddReactifComponent', () => {
  let component: AddReactifComponent;
  let fixture: ComponentFixture<AddReactifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReactifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddReactifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
