import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEchantillonComponent } from './update-echantillon.component';

describe('UpdateEchantillonComponent', () => {
  let component: UpdateEchantillonComponent;
  let fixture: ComponentFixture<UpdateEchantillonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEchantillonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEchantillonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
