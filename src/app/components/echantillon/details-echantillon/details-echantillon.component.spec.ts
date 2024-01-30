import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEchantillonComponent } from './details-echantillon.component';

describe('DetailsEchantillonComponent', () => {
  let component: DetailsEchantillonComponent;
  let fixture: ComponentFixture<DetailsEchantillonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsEchantillonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsEchantillonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
