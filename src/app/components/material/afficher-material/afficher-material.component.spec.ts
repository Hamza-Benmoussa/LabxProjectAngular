import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherMaterialComponent } from './afficher-material.component';

describe('AfficherMaterialComponent', () => {
  let component: AfficherMaterialComponent;
  let fixture: ComponentFixture<AfficherMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
