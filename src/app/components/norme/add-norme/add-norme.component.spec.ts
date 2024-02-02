import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNormeComponent } from './add-norme.component';

describe('AddNormeComponent', () => {
  let component: AddNormeComponent;
  let fixture: ComponentFixture<AddNormeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNormeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNormeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
