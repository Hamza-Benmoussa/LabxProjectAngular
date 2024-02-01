import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReactifComponent } from './update-reactif.component';

describe('UpdateReactifComponent', () => {
  let component: UpdateReactifComponent;
  let fixture: ComponentFixture<UpdateReactifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateReactifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateReactifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
