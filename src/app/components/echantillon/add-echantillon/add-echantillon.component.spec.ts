import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEchantillonComponent } from './add-echantillon.component';

describe('AddEchantillonComponent', () => {
  let component: AddEchantillonComponent;
  let fixture: ComponentFixture<AddEchantillonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEchantillonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEchantillonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
